# Mock — Video streaming

**Timebox:** 45 minutes  
**Candidate brief:** Serve on-demand video globally with adaptive delivery.

## Required flow

1. Confirm three functional requirements and two non-functional priorities.
2. Estimate traffic, storage, read/write ratio, and a peak scenario.
3. Define the API, data entities, and high-level request flow.
4. Deep dive into the most important bottleneck.
5. Cover failures, observability, security, and explicit trade-offs.

## Interviewer follow-ups

- What fails first under a tenfold traffic spike?
- Which data can be stale, delayed, or recomputed?
- What metric detects that a user-visible path is degrading?
- What cost or complexity did your design introduce?

Use the [system-design 45-minute script](../how-to-approach.md) before comparing ideas with a peer or coach.
