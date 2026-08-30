# 09 — Resilience

**Focus:** Failure handling, edge cases, graceful degradation

## Why it matters

Resilience assumes components will be slow, unavailable, duplicated, or inconsistent. Timeouts, retries with backoff, idempotency, circuit breakers, and fallbacks bound the damage.

## Core trade-off

Retries can rescue transient failures but can amplify overload. Fallbacks preserve a core experience while intentionally reducing features or freshness.

## Practice exercise

Trace a payment request when the client times out after the server may have charged the card. How do idempotency keys protect the outcome?

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
