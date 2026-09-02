# Design — <system name>

**Date:** · **Timer:** 45:00 · **Got to step:** ___ / 7 when it rang

---

## 1 · Scope (target 5 min)

**In scope:**
1.
2.
3.

**Explicitly NOT building:**
-
-

**Questions I'd ask the interviewer:** *(and the answer I'll assume, since nobody's here)*
1. →
2. →
3. →

## 2 · Non-functional requirements (target 5 min)

Put numbers on these. "Fast" is not a requirement.

| Concern | My number | Why it matters here |
| --- | --- | --- |
| Read/write ratio | | |
| Scale (req/s) | | |
| Latency (p99) | | |
| Availability | | |
| Consistency — what may be stale, and for how long | | |
| Durability — what may we lose | | |

**The one requirement that will drive the whole design:**

## 3 · Estimate (target 5 min)

Show the arithmetic. Round hard.

```
writes/s   =
reads/s    =
peak       = 10x average =
storage/yr =
```

**What this number tells me:** *(if the estimate didn't change a decision, you're decorating — go back)*

## 4 · API + data model (target 5 min)

```
POST /...    ->
GET  /...    ->
```

```
table_name(col PK, col, col)
```

**Store choice and the one-sentence reason:**

## 5 · High-level design (target 8 min)

```
(boxes and arrows — ASCII is fine)
```

**Walk a read through it:**

**Walk a write through it:**

**Every box, and the requirement from step 2 that justifies it:**

| Box | Exists because |
| --- | --- |
| | |

## 6 · Deep dive (target 12 min)

**The hard part:**

| Option | How it works | Cost |
| --- | --- | --- |
| A | | |
| B | | |
| C | | |

**I pick:** ___ **because:**

**And what that pick costs me:**

## 7 · Bottlenecks & failure (target 5 min)

**What breaks first:**

**Mitigations, cheapest first:**
1.
2.
3.

**What I'd monitor:**

**What I'd design next if I had another hour:**

---

## Self-review — be honest, nobody's grading this but you

- Where did I go silent or waffle?
- Which choice did I state without naming its cost?
- Which step did I rush or skip because of the clock?
- What did I not know? *(list terms to look up in `../reference/` AFTER this)*
