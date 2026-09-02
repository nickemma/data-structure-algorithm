# Weekly study plan

A rhythm, not a syllabus. Patterns unlock as you finish them, so the calendar bends to your pace rather than the other way round.

Budget **~90 minutes a day**. If you only have 45, do the DSA block and drop the rest.

## The weekly rhythm

One pattern per week is a comfortable pace. Two per week is aggressive but doable if you're interviewing soon.

| Day | Block | What |
| --- | --- | --- |
| **Mon** | DSA · 60 min | Read the pattern lesson + do the walkthrough with me. |
| **Tue** | DSA · 60 min | Practice problem 1, timed. Paste the passing code into `my-code/`. |
| **Wed** | SD · 60 min | One system design module: script, worked example, or a mock. |
| **Thu** | DSA · 60 min | Practice problem 2 + the recognition check. Bring both to me. |
| **Fri** | Review · 45 min | Re-solve one problem from an earlier week, cold. Update `dsa/progress.md`. |
| **Sat** | Mock · 60 min | Every 2–3 weeks: one timed DSA or system design mock. Otherwise rest. |
| **Sun** | — | Off. Genuinely off. Retention needs it. |

Friday is the day people skip, and it's the day that actually builds retention. Protect it.

## Suggested sequence

Week 1 is fixed. After that, the DSA order is the pattern order in [dsa/README.md](dsa/README.md), and system design runs alongside it independently.

| Week | DSA | System design |
| --- | --- | --- |
| 1 | [35-min script](dsa/how-to-solve.md) + [Big-O](dsa/big-o-basics.md) + Pattern 01 Two Pointers | [45-min script](system-design/how-to-approach.md) + [worked example](system-design/01-worked-example/) |
| 2 | Pattern 02 Hash Map & Set | [Practice: rate limiter](system-design/practice.md) → review with me |
| 3 | Pattern 03 Sliding Window | Reference: [scoping](system-design/reference/foundations/01-scoping/) + [scaling](system-design/reference/foundations/03-scaling/) |
| 4 | Patterns 04–05 Linked lists | Mock: notification service |
| 5 | Pattern 06 Binary Search | Reference: [caching](system-design/reference/foundations/06-caching/) + [CAP](system-design/reference/foundations/04-cap-theorem/) |
| 6 | Patterns 07–08 Prefix Sum, Monotonic Stack | Mock: news feed |
| 7 | Patterns 09–10 Intervals, Top K | Reference: [distributed data](system-design/reference/working-at-scale/11-distributed-data/) + [async workflows](system-design/reference/working-at-scale/10-async-workflows/) |
| 8 | Pattern 11 Tree Traversal | Mock: job scheduler |
| 9 | Pattern 12 Graphs & Matrices | Reference: [resilience](system-design/reference/working-at-scale/09-resilience/) + [protocols](system-design/reference/working-at-scale/08-protocols/) |
| 10 | Pattern 13 Backtracking | Mock: chat service |
| 11 | Pattern 14 Dynamic Programming (give this two weeks) | Reference: [case studies](system-design/reference/working-at-scale/12-case-studies/) |
| 12 | Pattern 14 continued + Pattern 15 Bit Manipulation | Mock: pick your weakest |
| 13+ | Re-solve everything cold, in random order | Re-run your two weakest designs from scratch |

## If you have an interview next week

Drop the schedule. Do this instead:

1. [The 35-minute script](dsa/how-to-solve.md) and [the 45-minute script](system-design/how-to-approach.md). These are pure technique and pay off immediately.
2. Patterns **01 Two Pointers**, **02 Hash Map & Set**, **03 Sliding Window** — between them they cover a large share of what gets asked at screen stage.
3. One full timed mock of each type. Out loud. Recorded.

Technique before coverage. A candidate who structures the problem well and solves it with a hint beats one who knows more patterns and communicates none of it.

## Rules that make this work

- **Out loud, alone, in a real voice.** Every problem, every design.
- **Time-box and stop.** 25 min easy · 35 min medium · 45 min design.
- **Log everything** in [dsa/progress.md](dsa/progress.md), including failures. The weak-spots table is the most valuable page in the repo after a month.
- **Re-solve, don't re-read.** 1 day, 1 week, 1 month, from a blank editor.
- **Don't open `verdict.md` before writing your own answer.** One first attempt per problem — don't spend it reading.
