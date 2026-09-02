# DSA — 15 patterns

You are not going to memorise 300 problems. There aren't 300 ideas — there are about 15, and interview problems are those 15 in different clothes.

This track teaches one pattern at a time and then makes you prove it transfers.

## The loop

```
1. LESSON      I explain the pattern: what it is, the one precondition, when it fails.
2. WALKTHROUGH We solve the anchor problem together, minute by minute, on a 35-min clock.
3. PRACTICE    You solve 2 LeetCode problems alone. Timed. No peeking.
4. VERDICT     A recognition check: "does this pattern fit THIS problem?" — including
               a problem where the honest answer is no.
5. REVIEW      You paste your passing code into my-code/, tell me you're done, and I
               review it the way an interviewer would. Then the next pattern unlocks.
```

Step 3 is the one that matters. Reading a pattern feels like learning. It isn't. Solving something *new* with it is the proof, and that green LeetCode tick is the receipt.

## Read these first (once, ~20 minutes)

1. [The 35-minute script](how-to-solve.md) — the shape of every coding interview. Use it on every problem, out loud.
2. [Big-O in 10 minutes](big-o-basics.md) — exactly enough complexity to pass, no more.

Don't skip these. They're the part that makes you *hireable*, as opposed to merely correct.

## The 15 patterns

Order matters — each one builds on the last. Go top to bottom.

| # | Pattern | Anchor problem | Status |
| --- | --- | --- | --- |
| 01 | [Two Pointers](patterns/01-two-pointers/) | Valid Palindrome | ✅ **start here** |
| 02 | [Hash Map & Hash Set](patterns/02-hash-map-and-set/) | Two Sum | 🔒 |
| 03 | [Sliding Window](patterns/03-sliding-window/) | Longest Substring Without Repeating Characters | 🔒 |
| 04 | [Fast & Slow Pointers](patterns/04-fast-and-slow-pointers/) | Linked List Cycle | 🔒 |
| 05 | [In-Place Linked List Reversal](patterns/05-linked-list-reversal/) | Reverse Linked List | 🔒 |
| 06 | [Binary Search](patterns/06-binary-search/) | Binary Search | 🔒 |
| 07 | [Prefix Sum](patterns/07-prefix-sum/) | Range Sum Query | 🔒 |
| 08 | [Monotonic Stack](patterns/08-monotonic-stack/) | Daily Temperatures | 🔒 |
| 09 | [Overlapping Intervals](patterns/09-intervals/) | Merge Intervals | 🔒 |
| 10 | [Top K Elements](patterns/10-top-k-elements/) | Kth Largest Element | 🔒 |
| 11 | [Binary Tree Traversal](patterns/11-tree-traversal/) | Maximum Depth of Binary Tree | 🔒 |
| 12 | [Graphs & Matrices](patterns/12-graphs-and-matrices/) | Number of Islands | 🔒 |
| 13 | [Backtracking](patterns/13-backtracking/) | Subsets | 🔒 |
| 14 | [Dynamic Programming](patterns/14-dynamic-programming/) | Climbing Stairs | 🔒 |
| 15 | [Bit Manipulation](patterns/15-bit-manipulation/) | Number of 1 Bits | 🔒 |

Patterns 01–14 come from [the 14 LeetCode patterns article](https://www.blog.codeinmotion.io/p/leetcode-patterns). Hash Map is added at 02 because it's the most common pattern in real interviews and the article assumes you already have it.

Locked patterns aren't written yet — on purpose. I write each one after seeing how you did on the previous one, so the lesson can target what you actually got wrong.

## Inside a pattern folder

| File | What it is | When to open it |
| --- | --- | --- |
| `README.md` | The lesson | First |
| `walkthrough.md` | Anchor problem, minute by minute | Second |
| `solution/` | My reference code, Python + TS, runnable | After the walkthrough |
| `practice.md` | Your 2 problems + recognition check | Third — go to LeetCode |
| `verdict.md` | Answers to the recognition check | **Only after you've written your own answers** |
| `my-code/` | Your passing submissions + the log | As you finish each problem |

## Ground rules

- **Python or TypeScript.** Pick the one you'll use in the interview. Doing both is a bonus, not a requirement.
- **Time-box everything.** 25 min for an easy, 35 for a medium. When time's up, take a hint. Grinding for two hours teaches you less than one hint and a retry.
- **Talk out loud, alone, in a real voice.** This is the single most-skipped and highest-value habit here. You are being hired for how you think under observation, not for the diff.
- **Hints are a ladder, not a door.** One level at a time. `verdict.md` is last.
- **Re-solve, don't re-read.** Come back to a problem after 1 day, 1 week, 1 month and solve it cold. Log it in [progress.md](progress.md).

## Also here

[Mock interviews](mock-interviews/) — 45-minute timed simulations. Do one after every 2–3 patterns, not before. They're for pressure-testing, not learning.
