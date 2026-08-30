# Mock 01 — Design a URL shortener

**Timebox:** 45 minutes  
**Mode:** Candidate-led. Do not read the interviewer prompts until you have driven the design yourself.

## Candidate brief

Design a service that creates short links and redirects visitors to the original URL.

Start from the interview template. Make and state reasonable assumptions; the prompt intentionally leaves details open.

## Your deliverables

1. Three core functional requirements and two explicit non-goals.
2. Two non-functional requirements with measurable targets or clear priorities.
3. A capacity estimate for link creation, redirects, and storage.
4. A small API and data model.
5. A high-level request flow for creation and redirect.
6. One deep dive: identifier generation, caching, analytics, abuse prevention, or data partitioning.
7. A failure and observability plan.

## Interviewer prompts — reveal only if needed

<details>
<summary>Clarification prompts</summary>

- Are custom aliases required?
- May links expire?
- Who can view analytics?
- Is the system global, and how fresh must a new link be worldwide?
</details>

<details>
<summary>Scale prompts</summary>

- How do redirects compare with link creations?
- What happens during a viral event?
- How would you estimate the size of a short code space?
</details>

<details>
<summary>Failure prompts</summary>

- What if the cache is unavailable?
- How will you stop a malicious client from creating links at extreme volume?
- If analytics processing is delayed, does redirecting stop?
</details>

## Self-review rubric

| Area | Strong answer |
| --- | --- |
| Scope | Prioritises create and redirect flows before extras |
| Data | Separates durable link mapping from optional click events |
| Scale | Explains read/write ratio and identifies redirect as the likely hot path |
| Trade-offs | States why cache and asynchronous analytics help, plus their costs |
| Reliability | Provides a fallback when cache or analytics fail |
| Observability | Names latency, errors, cache hit rate, queue lag, and abuse metrics |

## Debrief

Write down one decision you made, one cost it introduced, and the metric that would tell you whether it is working. That is the system-design equivalent of stating a DSA invariant.
