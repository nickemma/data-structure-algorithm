# 11 — Distributed data storage

**Focus:** Non-relational models, replication

## Why it matters

Key-value, document, wide-column, and search stores fit different access patterns. Replication improves availability and read capacity while introducing replication lag, conflict handling, and extra cost.

## Core trade-off

There is no universally best database. Start with access patterns, consistency needs, data shape, and operational constraints.

## Practice exercise

Choose storage for user profiles, a social graph, events, and full-text search. Explain why one database should not automatically own every workload.

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
