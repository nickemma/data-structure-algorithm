# Worked example — Design a URL shortener

**Status:** ✅ read this one · then go do [practice.md](../practice.md)

This is the whole 45 minutes, written out. Read it once for the flow, then a second time asking at each step: *"why did he go there next?"* The reasoning is the lesson; the URL shortener is just the excuse.

Have [how-to-approach.md](../how-to-approach.md) open beside it — I'll name the step each time.

---

## 0:00 — The prompt

> "Design a URL shortener, like bit.ly."

**First move: do not start designing.** The prompt is deliberately vague. Vagueness is the test.

---

## Step 1 · Scope (0:00–5:00)

**Me:**

> "Let me make sure I've got the product right. Users paste a long URL, get back a short one, and when anyone visits the short link they're redirected to the original. Let me propose a scope and you tell me if you want it wider.
>
> **In scope:**
> 1. Create a short link from a long URL.
> 2. Resolve a short link and redirect to the original.
> 3. Show the owner a click count.
>
> **Out of scope for now:** custom aliases, link expiry, user accounts and auth, and abuse/malware scanning. Those are all real, but I'd rather go deep on the core path. Want me to pull any of those in?"

**Interviewer:** "That's fine. Assume links live forever."

**Me:**

> "Good — that simplifies things, no cleanup job needed. Three quick questions:
> 1. Roughly how many links created per day?
> 2. Is this global or one region?
> 3. If someone creates a link, does it need to work worldwide immediately, or is a few seconds of propagation acceptable?"

**Interviewer:** "100 million a year. Global. Assume it needs to work immediately."

### 💡 Why I asked exactly those

Each one changes the architecture, which is the test for whether a question is worth asking:

- **Volume** → tells me whether this is a scaling problem at all.
- **Global** → tells me whether I need multi-region, which is the single biggest complexity jump available.
- **Immediate consistency** → "must work immediately" rules out lazy async replication of the link table. That's a real constraint I'd otherwise have violated by accident at minute 30.

Questions that *don't* change anything ("what language should I use?") burn clock. Ask questions whose answers move the design.

---

## Step 2 · Non-functional requirements (5:00–10:00)

**Me:**

> "Here's what I think the quality bar is:
>
> - **Read-heavy, and heavily so.** A link gets created once and clicked many times. I'll assume 100:1 reads to writes — sound right?" *(Interviewer: "Yes.")*
> - **Latency: p99 redirect under 100 ms.** A redirect is invisible infrastructure sitting in front of someone else's page load. If it's slow, the whole link feels broken.
> - **Availability: redirects need to be very high, say 99.99%.** A dead redirect is a dead link on someone else's website, and it's permanent damage. Analytics can be 99% — nobody notices a late chart.
> - **Consistency: a new link must be readable immediately** — you said so. But **click counts can be eventually consistent**; minutes of lag is fine.
> - **Durability: the code→URL mapping can never be lost.** Losing it breaks links permanently across the whole internet. Raw click events are less precious — losing a few is survivable.
>
> The important split there is that the redirect path and the analytics path have completely different requirements. I'm going to design them separately."

### 💡 Why this step decides everything

Those five lines already contain the architecture:

| I said | It forces |
| --- | --- |
| 100:1 read-heavy | Cache. Read replicas. Optimise the read path first. |
| p99 < 100 ms | No slow work inside the redirect. Analytics must be async. |
| Redirects 99.99%, analytics 99% | Split them, so analytics failing can't take redirects down. |
| Counts eventually consistent | A queue is allowed. |
| Mapping must never be lost | Durable, replicated primary store. No cache-only writes. |

**This is the move to steal.** Beginners think design happens at the whiteboard. It happens here — the diagram is just the consequence.

---

## Step 3 · Estimate (10:00–15:00)

**Me:**

> "Let me size it. I'll round aggressively.
>
> **Writes:** 100M links/year ÷ ~30M seconds/year ≈ **3 writes/second.** That's nothing. A laptop does that.
>
> **Reads:** 100× that = **300 reads/second** average. Traffic is spiky — a link goes viral — so I'll design for 10× peak: **3,000 reads/second.**
>
> **Storage:** each row is a short code (~7 bytes), a long URL (~200 bytes at the high end), an owner id and timestamps. Call it 500 bytes with indexing overhead. 100M × 500 B = **50 GB/year.** Ten years is 500 GB.
>
> **Short code space:** base62 (a–z, A–Z, 0–9). 62⁷ ≈ 3.5 trillion. At 100M/year that lasts effectively forever. So **7 characters** it is.
>
> **Analytics:** 300 clicks/s × 100 bytes = 30 KB/s raw ≈ **1 TB/year**, and growing much faster than the link table."

**And then the sentence that matters:**

> "So the interesting conclusion: **50 GB is not a scaling problem.** That fits on one database node with room to spare. This isn't a sharding problem — it's a *latency and availability* problem. I'm going to spend my time on caching and the read path, not on partitioning."

### 💡 Why this step is not busywork

You estimate to find out **which problem you actually have.** Many candidates run the numbers, produce "50 GB," and then start explaining consistent hashing anyway — which proves they were reciting, not reasoning.

Also note what did *change*: analytics is 20× the size of the link data and grows continuously. So the *analytics* store might genuinely need partitioning even though the link store doesn't. Different problems, different answers.

---

## Step 4 · API and data model (15:00–20:00)

**Me:**

> "Three endpoints:
>
> ```
> POST /links            { longUrl }        -> 201 { shortCode, shortUrl }
> GET  /{shortCode}                         -> 302 Location: <longUrl>
> GET  /links/{code}/stats                  -> 200 { clicks, createdAt }
> ```
>
> Two stores:
>
> ```
> links (
>   code        VARCHAR(7) PRIMARY KEY,
>   long_url    TEXT NOT NULL,
>   owner_id    BIGINT,
>   created_at  TIMESTAMP
> )
>
> click_events (              -- append-only, separate store
>   code, ts, country, referrer
> )
> ```
>
> On the database choice: every lookup is by primary key. No joins, no range scans, no transactions across rows. That access pattern is a perfect fit for a key-value store like DynamoDB or Cassandra.
>
> **But I'd still start with Postgres.** 50 GB fits comfortably on one node, Postgres gives me strong consistency for free — which we need, since new links must be immediately readable — and it's far simpler to operate. I'd move to a distributed KV store when the data outgrows a single node, and the migration is easy precisely because the access pattern is so simple."

**Interviewer:** "Why 302 and not 301?"

**Me:**

> "Good catch, and it's a real trade-off. **301 is permanent** — browsers cache it, so repeat visits skip my servers entirely. Cheaper and faster. But then I never see the click, so my analytics silently break. **302 is temporary** — every visit comes through me, so I get accurate counts, at the cost of serving more traffic.
>
> Since click analytics is an explicit product feature, I'd take 302. If analytics were dropped from scope, 301 is strictly better."

### 💡 What just happened

That 301/302 question is a **trap that rewards knowing the cost, not the definition.** Notice the answer's shape: name both options, name what each buys and what each costs, then pick one *by tying it back to a requirement we already agreed on*.

That shape works for every design question you'll ever get. Memorise the shape, not the answer.

---

## Step 5 · High-level design (20:00–28:00)

**Me:** *(drawing)*

```
                    ┌──────────────┐
   Client ────────► │ Load balancer│
                    └──────┬───────┘
                           ▼
                  ┌──────────────────┐
                  │  App servers     │  stateless, autoscaled
                  └───┬──────────┬───┘
              hit/miss│          │ fire-and-forget
                      ▼          ▼
              ┌─────────────┐  ┌────────────────┐
              │ Redis cache │  │ Kafka / SQS    │
              └──────┬──────┘  └────────┬───────┘
                miss │                  ▼
                     ▼            ┌───────────┐
              ┌─────────────┐     │  Worker   │
              │  Postgres   │     └─────┬─────┘
              │  (+replicas)│           ▼
              └─────────────┘   ┌────────────────┐
                                │ Analytics store│
                                └────────────────┘
```

**Redirect path (the hot one):**

> "`GET /abc1234` hits the load balancer and goes to any app server — they're stateless, so any of them will do. The server checks Redis. On a hit, it returns a 302 immediately. It pushes a click event onto the queue **without waiting for an ack** — that's fire-and-forget, so analytics can never slow down or break a redirect. On a cache miss, it reads Postgres, writes the result into Redis, then returns.
>
> Cache hit rate should be very high here, because link popularity follows a power law — a small number of links get most of the traffic, and they'll all be resident. I'd guess 95%+, which means Postgres sees maybe 150 reads/s. Comfortable."

**Create path:**

> "`POST /links` generates a code, writes to Postgres, and returns. I'd deliberately *not* populate the cache on write — most links created are never clicked, so pre-warming would just pollute the cache. Let the first read pull it in."

### 💡 The two moves worth stealing

1. **Walk a request end to end, out loud.** A diagram with no narration is not a design. The narration is where you demonstrate that you understand your own boxes.
2. **Justify a box by the requirement it satisfies.** Redis isn't there because caches are good. It's there because we agreed p99 < 100 ms and 100:1 reads. The queue isn't there because queues are modern — it's there because analytics must never be able to slow the redirect down. Every box should trace back to a line from Step 2.

---

## Step 6 · Deep dive — generating the short code (28:00–40:00)

**Interviewer:** "How do you generate the short code?"

**Me:**

> "Three options. Let me take them in order.
>
> **Option A: hash the URL** — MD5 the long URL, take the first 7 base62 characters. Stateless, and identical URLs naturally dedupe. But **7 characters out of a 128-bit hash will collide**, and by the birthday bound you start seeing collisions well before you exhaust the space. So every write needs a read to check for a collision, plus a retry loop. That read-before-write on every insert is a real cost.
>
> **Option B: a global auto-increment counter**, base62-encoded. No collisions ever, and codes are short and dense. Two problems: the counter is a **single point of contention and failure**, and the codes are **sequential and guessable** — anyone can enumerate every link in the system by counting up, which is a privacy leak given people shorten private documents.
>
> **Option C — what I'd pick: a counter, but handed out in blocks.** A coordination service (ZooKeeper, or just a row in Postgres updated transactionally) gives each app server a range of one million ids at a time. The server hands them out from memory with zero coordination, and comes back for a new block when it runs low.
>
> No collisions, essentially no contention — one coordination call per million links, so at 3 writes/s that's roughly one call every four days. And I'd fix the enumeration problem by scrambling the counter before encoding: multiply by a large constant modulo 62⁷, or run it through a small fixed permutation. Reversible, so no storage cost, but the output looks random.
>
> The cost is losing ids: if a server dies mid-block, that block is gone. At 3.5 trillion available codes, I genuinely do not care."

**Interviewer:** "What if the cache goes down?"

**Me:**

> "That's my top failure mode, so I'm glad you asked.
>
> Redis dying means every redirect falls through to Postgres — 3,000 QPS against a database sized for 150. It falls over, and now redirects are fully down, which is the one thing we said must be 99.99%.
>
> Three mitigations, cheapest first:
>
> 1. **A small in-process LRU cache on each app server** — a few thousand entries. Costs nothing, and because traffic is power-law distributed it absorbs most of the load on its own. This is the highest-value fix.
> 2. **Redis as a replicated cluster**, so one node failing loses a shard, not the whole cache.
> 3. **A concurrency limit on the DB connection pool.** When the cache is cold, requests beyond the limit fail fast with a 503 instead of piling up. Degrade, don't collapse — some redirects failing is much better than the database dying and all of them failing.
>
> I'd also add **request coalescing** on cache misses: if a thousand requests for the same viral link all miss at once, only one should hit the database and the rest wait on that result. Otherwise a single hot key can produce a thundering herd."

### 💡 Why this deep dive scores

Look at the shape again: **three options, the cost of each, a pick, and the cost of the pick.**

Notice I did not say "Option C is best." I said what C loses (dropped id blocks) and why that loss is acceptable *here specifically* (3.5 trillion codes available). Every design decision is a trade; a candidate who presents one as free is telling you they don't understand it.

The cache-failure answer has the same shape, ordered by cost-effectiveness. "What breaks and what do I do about it" is a question you should always have an answer ready for.

---

## Step 7 · Bottlenecks and wrap-up (40:00–45:00)

**Me:**

> "Where this breaks, in order:
>
> 1. **Cache loss** — covered above. Biggest risk, mitigated in layers.
> 2. **A single viral link.** One code taking 50% of traffic is a hot-key problem. The local in-process cache handles it well, since a hot key is exactly what an LRU keeps.
> 3. **The analytics store.** It's 1 TB/year and growing, versus 50 GB for links. That's the piece that actually needs partitioning — by date, most likely — and it's where I'd expect the next real work.
> 4. **Global latency.** We said global users, and I've drawn one region. Cross-Atlantic round trips alone are ~150 ms, which blows the p99 budget on its own. The fix is read replicas plus regional caches, with writes still going to one primary region — that's acceptable because writes are only 3/s and the link table is small.
>
> **What I'd monitor:** p99 redirect latency, cache hit rate, queue depth, 5xx rate, and DB connection pool saturation.
>
> **If I had more time,** the next thing I'd design is abuse prevention — rate limiting link creation and scanning for malware — because a URL shortener is an attractive phishing tool and that's a product-level risk, not just a technical one."

### 💡 Ending well

Volunteering your own weaknesses reads as confidence, not doubt. It says: I know what this design costs, I made the trade deliberately, and I know what I'd do next.

Note that point 4 is a hole I left in my own design and then named. If you don't name it, the interviewer will — and then it's a gap they found instead of a limitation you understood.

---

## The transferable skeleton

Strip away the URLs and here's what's left. It works for any prompt:

1. **Scope it** — 3 features, 3 non-goals, 3 questions whose answers change the design.
2. **Set the quality bar with numbers** — especially the read/write ratio and what's allowed to be stale.
3. **Estimate to find out which problem you have** — then actually let the number decide.
4. **Small API, small schema, one sentence justifying the store.**
5. **Draw ≤8 boxes, then walk a read and a write through them out loud.** Every box traces to a requirement.
6. **One deep dive: three options, cost of each, pick, cost of the pick.**
7. **Name what breaks first, mitigate in layers, say what you'd monitor.**

Now go do [practice.md](../practice.md) — a different system, same seven steps, and you drive.
