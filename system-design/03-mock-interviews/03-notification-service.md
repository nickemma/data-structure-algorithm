# Mock — Notification service

**Timebox:** 45 minutes  
**Candidate brief:** Deliver email, push, and SMS messages at scale with user preferences.

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

Use the [system-design interview template](../00-start-here/interview-template.md) before comparing ideas with a peer or coach.
