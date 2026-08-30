# 04 — CAP theorem

**Focus:** Consistency, availability, partition tolerance

## Why it matters

A network partition means nodes cannot reliably communicate. During that partition, a distributed system must decide whether to reject or delay requests to preserve consistent results, or continue serving potentially stale/divergent results.

## Core trade-off

CAP is about behaviour during a partition, not a permanent label for a database. Identify data that requires stronger consistency separately from data that can tolerate delay.

## Practice exercise

For seat reservations and view counts, decide which operations should favour consistency and which can remain available with eventual convergence.

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
