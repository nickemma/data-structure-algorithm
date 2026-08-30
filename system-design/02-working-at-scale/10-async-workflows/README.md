# 10 — Asynchronous workflows

**Focus:** Queues, message brokers, data processors

## Why it matters

Queues decouple a producer from slower or bursty work. Brokers retain and deliver messages; processors consume, retry, deduplicate, and record outcomes.

## Core trade-off

Async work improves throughput and isolates failures, but it introduces delay, delivery semantics, ordering questions, backlogs, and dead-letter handling.

## Practice exercise

Move image processing off an upload request. Define the message, failure policy, retry behaviour, and the user-visible status.

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
