# 01 — Scoping a system

Before drawing boxes, agree on what system you are actually building. Good scoping prevents designing a global video platform when the prompt only needs a small internal dashboard.

## 1. Functional requirements

These are user-visible actions. Write 3–5 that define the core product.

For a URL shortener:

- A user can create a short link for a long URL.
- A visitor can resolve a short link and be redirected.
- The system may show click counts to the creator.

Ask: Which are essential for version one? What is explicitly out of scope?

## 2. Non-functional requirements

These describe quality constraints, not features.

| Concern | Useful question | Example decision |
| --- | --- | --- |
| Scale | Reads and writes per second? | Optimise redirects if reads dominate creation. |
| Latency | What response time is acceptable? | Keep redirect lookup close to the user. |
| Availability | Can a failed request be retried? | Redirects may need stronger availability than analytics. |
| Consistency | Must a write be visible instantly? | Click counts can often be eventually consistent. |
| Durability | How much data loss is acceptable? | Short-link mappings need durable storage. |
| Security | Who may read/change data? | Owners need authenticated edit access. |

## 3. Model the data

Name the core entities and their relationships before choosing a database.

```text
User 1 ──── creates ──── * ShortLink
ShortLink 1 ──── receives ──── * ClickEvent
```

An initial `ShortLink` model might include `code`, `destinationUrl`, `ownerId`, `createdAt`, and optional `expiresAt`. A `ClickEvent` contains the link code, timestamp, and coarse metadata.

## Trade-off card: collect click events synchronously?

| Choice | Gain | Cost | Good fit |
| --- | --- | --- | --- |
| Write analytics during redirect | Stronger immediate metrics | Slower, less reliable redirect path | Low-volume internal tool |
| Queue event after redirect | Fast, resilient redirects | Metrics arrive later; queue must be operated | Read-heavy public service |

Nothing is free: the queue improves the user-facing path while adding infrastructure, delivery semantics, and monitoring responsibilities.

## Mini exercise

Scope a photo-sharing service in five minutes. Write:

1. Three must-have actions.
2. Two non-functional constraints and why they matter.
3. Two core entities and one relationship.
4. One thing you deliberately exclude from version one.

## Interview language

“I’ll begin by confirming the core user flows and the scale. I’ll optimise the main read path first, then treat analytics as asynchronous because small reporting delays are acceptable.”
