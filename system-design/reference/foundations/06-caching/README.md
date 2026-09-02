# 06 — Caching

**Focus:** Client/server cache, CDNs, invalidation

## Why it matters

A cache stores reusable results closer to the caller. Browser caches and CDNs help static/public content; server-side caches protect databases and reduce read latency.

## Core trade-off

Caching trades freshness and operational simplicity for speed and lower origin load. Invalidation, stampedes, and stale data are design problems, not footnotes.

## Practice exercise

For a product page, choose what belongs in a CDN, an application cache, or only the database. Describe what happens after a price change.

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
