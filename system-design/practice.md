# Practice — you drive this one

Same seven steps. Different system. I'm not helping until you're done.

## The prompt

> **Design a rate limiter.** An API gateway sits in front of your company's services. You need to stop any single client from making more than *N* requests per minute, and reject the excess with `429 Too Many Requests`.

That's all you get — same as a real interview. The vagueness is deliberate; scoping it is step 1 of your job.

## Rules

- **45 minutes on a timer.** Stop when it rings, even mid-sentence. Learning to fit the clock *is* the skill.
- **Out loud, in a real voice, alone.** Record yourself if you can bear it. Play it back — you'll hear the ten seconds of silence you didn't notice.
- **Do not read [`mock-interviews/02-rate-limiter.md`](mock-interviews/02-rate-limiter.md) first.** It has interviewer prompts you can use *afterwards* to pressure-test what you built.
- Don't look anything up during the 45 minutes. If you don't know a term, say "I don't know X, but here's how I'd reason about it" — exactly like you would in the room.
- **Write as you go**, don't write it up afterwards from memory. The messy real-time version is what I want to see.

## Copy the template

```bash
cp my-designs/TEMPLATE.md my-designs/rate-limiter.md
```

Fill it in as you talk. ASCII diagrams are fine.

## Things I'll be looking for

Not "did you get it right" — there is no right. These:

| Step | What I'm checking |
| --- | --- |
| Scope | Did you name non-goals, or try to build everything? |
| Requirements | Did you put **numbers** on latency and scale, or hand-wave? |
| Estimate | Did the estimate actually *change* a decision, or was it decoration? |
| Design | Does every box trace back to a requirement you stated? |
| Deep dive | Three options with costs — or one option asserted as correct? |
| Failure | Did you name what breaks *before* I had to ask? |
| Throughout | Did you say the cost of every choice, not just the benefit? |

## Where you'll probably get stuck (that's fine — note it and move on)

You don't need to know these going in. Have a go, and we'll fill the gaps in review:

- **Which counting algorithm?** Fixed window is the obvious one and it has a specific flaw at the boundary — try to find it yourself by drawing a timeline. Sliding window and token bucket fix it differently.
- **Where does the counter live?** In each gateway's memory, or in a shared store? Both answers are defensible and they cost different things. This is your best deep-dive candidate.
- **What if the rate-limit store is down?** Fail open (let everything through) or fail closed (reject everything)? There's no universal answer — it depends on what the limiter is *for*. Say which and why.
- **What identifies a "client"?** API key, user id, IP? IPs are shared behind NAT. This belongs in step 1.

Struggling with these is the point. Don't look them up — bring me your half-formed answer and I'll tell you which instinct was right.

## Then bring it back

Say **"done with the rate limiter"** and give me:

1. Your filled-in `my-designs/rate-limiter.md`.
2. How far you got when the timer rang, honestly. (Most people don't finish. That's data.)
3. The one moment you froze or waffled.

I'll review it the way an interviewer would — what was strong, what I'd have pushed on, and what would have sunk you — and then write the next module aimed at whatever you actually missed.

## After the review

Re-run the same 45 minutes on a system from [`mock-interviews/`](mock-interviews/), which have interviewer prompts baked in. Rough order of difficulty:

1. `03-notification-service.md`
2. `05-news-feed.md`
3. `10-job-scheduler.md`
4. `04-chat-service.md`

The [`reference/`](reference/) folder has short pages on caching, CAP, sharding, protocols and the rest. **Read those on demand, after a design exposes a gap** — not front-to-back beforehand. Reading reference material cover to cover feels productive and teaches almost nothing.
