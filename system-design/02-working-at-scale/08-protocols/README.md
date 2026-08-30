# 08 — Protocols

**Focus:** HTTP, REST, GraphQL

## Why it matters

HTTP is the transport foundation. REST designs resource-oriented HTTP APIs with clear methods and caching semantics. GraphQL lets clients ask for shaped data but changes caching, query-cost, and authorisation concerns.

## Core trade-off

A flexible API can reduce round trips while making cost control and observability harder. Choose the simplest interface that fits client needs.

## Practice exercise

Design read and write APIs for a profile page. Compare a REST endpoint with a GraphQL query in terms of over-fetching and abuse control.

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
