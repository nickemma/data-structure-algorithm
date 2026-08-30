# Scoping — MCQs

## 1. Requirement type

“A redirect should complete in under 100 ms for most users” is primarily:

- A. A functional requirement
- B. A non-functional requirement
- C. A database schema
- D. An API endpoint

## 2. Scope control

An interviewer asks you to design an event-ticketing service. What should happen before selecting a database?

- A. Choose a globally replicated SQL database
- B. Add a CDN
- C. Clarify whether seat reservation and payment are in scope
- D. Estimate the number of microservices

## 3. Trade-off

Why might click analytics be asynchronous in a URL shortener?

- A. Clicks are never valuable
- B. It can keep the redirect path fast and available even if analytics is delayed
- C. Queues guarantee every event is processed exactly once
- D. It removes the need for monitoring

## Answers

1. **B.** It defines latency/quality rather than user functionality.
2. **C.** The presence of reservations and payments changes consistency, data, and failure requirements substantially.
3. **B.** Async processing separates the user-facing redirect from secondary work. It still requires monitoring and a delivery policy.
