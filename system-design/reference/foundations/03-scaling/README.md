# 03 — Scaling up

**Focus:** Vertical scaling, horizontal scaling, load balancers

## Why it matters

Vertical scaling adds capacity to one machine. Horizontal scaling adds machines and needs routing, state management, and coordination. A load balancer spreads healthy requests across instances.

## Core trade-off

Horizontal scaling improves capacity and fault tolerance but introduces load balancing, shared state, and operational complexity.

## Practice exercise

Sketch how a single web server evolves into several stateless application servers behind a load balancer. Where do sessions belong?

## Interview drill

Explain the concept in 60 seconds, then name one situation where you would avoid the first solution that comes to mind. State the requirement that changes your decision.
