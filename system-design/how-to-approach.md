# The 45-minute system design script

The thing nobody tells beginners: **there is no right answer.** You are not being tested on whether you know how Instagram is built. You are being tested on whether you can take a vague prompt, make sensible assumptions out loud, and defend your choices when pushed.

That means the *sequence* is the skill. Learn the sequence and you can design a system you've never heard of.

| Minutes | Step | Output |
| --- | --- | --- |
| 0–5 | **Scope** | 3–5 features, 2–3 non-goals |
| 5–10 | **Non-functional requirements** | Scale, latency, consistency — with numbers |
| 10–15 | **Estimate** | QPS, storage, bandwidth |
| 15–20 | **API + data model** | 3–5 endpoints, 2–3 tables |
| 20–28 | **High-level design** | The boxes-and-arrows diagram |
| 28–40 | **Deep dive** | One hard part, properly |
| 40–45 | **Bottlenecks & failure** | What breaks first, what you'd do |

Most beginners fail by spending 25 minutes drawing boxes and 0 minutes on requirements. Watch the clock.

---

## Step 1 · Scope (5 min)

Write down 3–5 things a user can **do**. Then write what you're deliberately **not** building.

> "For a URL shortener: a user can submit a long URL and get a short one; a visitor can hit the short one and get redirected; the owner can see click counts. I'm going to treat custom aliases, link expiry, and user accounts as out of scope unless you want them — shout if you'd rather I include one."

Non-goals are not laziness. Stating them is how you show you know the problem is bigger than 45 minutes, and it stops you from drifting.

**Ask 2–3 questions.** Good defaults:
- Who are the users, and how many?
- Is this read-heavy or write-heavy?
- Does it need to be global, or one region?
- Is stale data acceptable, and for how long?

## Step 2 · Non-functional requirements (5 min)

Features are what it does. These are how well it has to do it. Pick the 2–3 that matter and **put numbers on them**.

| Concern | The question | Example answer |
| --- | --- | --- |
| Scale | How many requests per second? | 10K reads/s, 100 writes/s |
| Latency | How fast must a response be? | p99 redirect under 100 ms |
| Availability | What happens if it's down for 5 min? | Redirects: 99.99%. Analytics: 99% is fine. |
| Consistency | Must a write be visible instantly? | New link: yes. Click count: minutes late is fine. |
| Durability | Can we ever lose data? | Link mappings: never. Raw click events: some loss OK. |

**The read/write ratio is the single most useful number you will produce.** 100:1 read-heavy means "cache aggressively, replicate reads." Write-heavy means "queue, batch, shard by write key." It determines your whole architecture. Get it in the first 10 minutes.

## Step 3 · Estimate (5 min)

Nobody expects precision. They want to see you reason with numbers instead of vibes. Round hard, use powers of 10, say your assumptions.

Numbers worth memorising:

- 1 day ≈ **86,400 s ≈ 10⁵ s**
- 1 million/day ≈ **12/s**
- 1 billion/day ≈ **12,000/s**
- 1 char = 1 byte · a UUID ≈ 16 bytes · a typical row ≈ 100 bytes–1 KB
- 1 TB = 1,000 GB. A commodity server holds a few TB. A modern DB node handles ~10K simple QPS.

Worked example:

> "Say 100 million new links a year. That's ~3 per second on write — trivially small. If the read:write ratio is 100:1, that's ~300 reads/s average, and I'll design for a 10x peak, so 3,000 reads/s. Storage: 100M links × ~500 bytes = 50 GB per year. That fits on one machine — so **this is not a storage problem, it's a latency problem.** That tells me to spend my time on caching, not sharding."

That last sentence is the whole point of estimating. You estimate to find out *which problem you actually have*. Beginners estimate and then ignore the answer.

## Step 4 · API + data model (5 min)

Keep it small. 3–5 endpoints. Just the shape.

```
POST /links          { url }              -> { shortCode }
GET  /{shortCode}                        -> 302 redirect
GET  /links/{code}/stats                 -> { clicks, createdAt }
```

Then the tables:

```
links(code PK, long_url, owner_id, created_at, expires_at)
clicks(code, ts, country, referrer)          -- append-only
```

Say why you picked SQL or NoSQL, in one sentence, based on the access pattern:

> "Lookups are always by primary key, there are no joins, and it's read-heavy — so a key-value store fits naturally. I'd still start with Postgres because 50 GB is small and it's operationally simpler; I'd move to something like DynamoDB if it grew past a single node."

"I'd start simple and move when it hurts" is a *strong* answer, not a weak one. Reaching for Cassandra on day one is what juniors do.

## Step 5 · High-level design (8 min)

Now draw. Boxes and arrows. Keep it to 6–8 boxes.

```
Client -> CDN/LB -> App servers -> Cache -> Database
                         |
                         +-> Queue -> Worker -> Analytics store
```

Then **walk one request end to end, out loud**:

> "A redirect comes in, hits the load balancer, goes to any app server — they're stateless. The server checks Redis for the code. On a hit, it returns a 302 immediately, and fires the click event onto a queue without waiting. On a miss, it reads the DB, writes to the cache, then returns."

Do this once for a read and once for a write. Walking the flow is what makes a diagram a *design*.

## Step 6 · Deep dive (12 min)

The interviewer will pick something, or ask "what's the hardest part?" Have an answer ready. Usual candidates:

- How do you generate unique IDs at scale? (counter vs. hash vs. snowflake)
- What exactly do you cache, and how does it get invalidated?
- How do you shard, and what's the shard key?
- How do you keep this fast when one item goes viral (hot key)?
- What guarantees does the queue give you — at-least-once? Then are your consumers idempotent?

Go **deep on one**, don't skim five. Depth is the signal.

## Step 7 · Bottlenecks & failure (5 min)

Close by volunteering what's wrong with your own design. This reads as senior every single time.

> "The first thing to break is the cache — if Redis dies, every redirect hits the database at 3,000 QPS and it falls over. I'd mitigate with a small in-process cache on each app server as a second layer, and rate-limit DB reads so a cold cache degrades instead of collapsing.
>
> The other risk is the queue backing up during a traffic spike. Because analytics is decoupled, that only delays click counts — redirects stay fast. That's the reason I put it behind a queue in the first place."

Then name what you'd monitor: p99 latency, cache hit rate, queue depth, error rate.

---

## The habits that actually score points

1. **Say the trade-off, always.** Never "I'll use Redis." Always "I'll use Redis — it costs money and adds a failure mode, but it takes reads off the DB and gets p99 under 100 ms, which is the requirement we agreed."
2. **Numbers before boxes.** Estimate first; let the numbers pick the architecture.
3. **Start simple, then scale under pressure.** Design the single-server version, then let the interviewer push you. Do not open with microservices.
4. **Nothing is free.** Cache → staleness. Queue → eventual consistency + ops burden. Shard → no cross-shard joins. Replica → replication lag. Name the cost every time.
5. **Drive.** Silence kills. Narrate, and check in: "does that flow make sense before I go deeper on ID generation?"
6. **"I don't know, but here's how I'd find out"** is a fine answer. Bluffing is not.

## Vocabulary you'll be expected to use

Don't memorise definitions — know what each one *costs*. The [reference/](reference/) folder has a page on each.

| Term | One line | The cost |
| --- | --- | --- |
| Load balancer | Spreads traffic across servers | Another hop; needs health checks |
| Horizontal scaling | Add more machines | Servers must be stateless |
| Cache | Keep hot data in memory | Stale data; invalidation is genuinely hard |
| CDN | Cache static assets near the user | Costs money; only helps static/cacheable content |
| Replication | Copy data to more nodes | Replication lag → reads can be stale |
| Sharding | Split data across nodes by a key | No cross-shard joins or transactions |
| Queue | Do work later, decoupled | Eventual consistency; needs idempotent consumers |
| CAP | Under a network partition, pick consistency or availability | You don't get both, and partitions do happen |
| Idempotency | Doing it twice = doing it once | Requires a dedupe key you must store |
