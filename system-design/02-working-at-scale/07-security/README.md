# 07 — Security

**Focus:** Authentication, authorisation, SSL/TLS

## Why it matters

Authentication establishes who a caller is. Authorisation decides what that caller may do. TLS protects data in transit and authenticates the server to the client.

## Core trade-off

Stronger controls reduce risk but add latency, key/token lifecycle work, recovery flows, and operational overhead. Apply least privilege instead of trusting a network boundary.

## Practice exercise

Design the permission check for a user sharing a private document. What is authenticated, authorised, encrypted, and audited?

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
