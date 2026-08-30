# System-design interview template

Use this worksheet in every practice session.

## 1. Scope

- Who uses the system and what is their most important action?
- What three functional requirements are mandatory?
- What is out of scope for this version?

## 2. Quantify

- Daily active users / requests per day:
- Peak requests per second:
- Read/write ratio:
- Expected storage growth:
- Latency and availability target:

State assumptions aloud. An interviewer evaluates your reasoning, not your ability to guess an exact number.

## 3. Design

- API boundaries and core data entities
- Request flow and high-level components
- Data ownership and storage choice
- Cache, asynchronous workflow, and rate limiting where needed

## 4. Deep dive

Choose the most important bottleneck: write path, read path, data partitioning, fan-out, search, or consistency. Explain it clearly before adding further components.

## 5. Close with operations and trade-offs

- What fails first?
- What telemetry detects it?
- Which data may be stale or lost?
- What did you optimise, and what did you intentionally give up?
