# 05 — Relational data

**Focus:** Relational modelling, ACID, sharding

## Why it matters

Relational databases fit structured entities and transactions across related records. ACID helps preserve correctness; sharding partitions data when one database cannot handle the required scale.

## Core trade-off

Transactions simplify correctness but can limit cross-shard work. Sharding increases capacity while making joins, transactions, and rebalancing harder.

## Practice exercise

Model orders, payments, and inventory. Which update needs a transaction, and what shard key would you begin with?

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
