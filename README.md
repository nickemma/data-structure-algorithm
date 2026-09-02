# Interview prep — patterns, not memorisation

A workspace for getting through coding and system design interviews when you can already program but DSA and system design have never clicked.

The whole repo runs on one idea: **you haven't learned something until you've used it on a problem you'd never seen.** So every lesson ends with you going to LeetCode alone, and coming back with proof.

## The loop

```
1. LESSON       I explain one pattern — what it is, its one precondition, when it fails.
2. WALKTHROUGH  We solve an anchor problem together, minute by minute, on the clock.
3. PRACTICE     You solve 2 new problems alone, timed, no peeking.
4. RECOGNITION  "Does this pattern fit THIS problem?" — including one where it doesn't.
5. REVIEW       You paste your passing code in, I review it like an interviewer,
                the next pattern unlocks.
```

Step 3 is the whole thing. Reading a pattern feels like learning; it isn't. The green LeetCode tick is the receipt.

## Two tracks

| | Start at | Then |
| --- | --- | --- |
| **[DSA](dsa/README.md)** | [The 35-minute script](dsa/how-to-solve.md) + [Big-O in 10 minutes](dsa/big-o-basics.md) | [Pattern 01 — Two Pointers](dsa/patterns/01-two-pointers/) |
| **[System Design](system-design/README.md)** | [The 45-minute script](system-design/how-to-approach.md) | [Worked example: URL shortener](system-design/01-worked-example/) |

Fifteen DSA patterns, in a deliberate order. Fourteen come from [the 14 LeetCode patterns article](https://www.blog.codeinmotion.io/p/leetcode-patterns); Hash Map is added at position 02 because it's the most common pattern in real interviews and the article assumes you have it.

Code is **Python and TypeScript** only. Pick the one you'll actually type in the interview.

## Right now

You're at the start. Do this today:

1. Read [the 35-minute script](dsa/how-to-solve.md) — 10 minutes.
2. Read [Pattern 01](dsa/patterns/01-two-pointers/README.md) — 15 minutes.
3. Work through [the walkthrough](dsa/patterns/01-two-pointers/walkthrough.md) — 30 minutes.
4. Go do [the two practice problems](dsa/patterns/01-two-pointers/practice.md) — 60 minutes, timed.
5. Come back and say **"done with pattern 1"**.

Patterns 02–15 are deliberately unwritten. I write each one after seeing how you did on the last, so it can target what you actually got wrong.

For pacing across both tracks, see [the weekly study plan](weekly-study-plan.md).

## How to not waste your time here

- **Talk out loud, alone, in a real voice.** The most-skipped and highest-value habit in this repo. You are hired for how you think under observation, not for the diff.
- **Time-box.** 25 min easy, 35 min medium, 45 min for a design. When it rings, take a hint. Two hours of grinding teaches less than one hint and a retry.
- **Never open `verdict.md` before writing your own answer.** You only get one first attempt per problem; spending it on reading is a waste.
- **Re-solve cold** after 1 day, 1 week, 1 month. Log it in [dsa/progress.md](dsa/progress.md). Re-reading is not re-solving.
