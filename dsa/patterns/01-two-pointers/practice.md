# Practice — prove the pattern is worth it

You've seen Two Pointers work once. Now prove to yourself it transfers. Two problems to solve on LeetCode, plus one recognition check with no coding.

**Rules:**

- Run the [35-minute script](../../how-to-solve.md) on each one. Out loud, alone in a room. It feels stupid. Do it anyway — the talking is the part you're bad at, not the code.
- Set a timer: **25 minutes** for problem 1, **35 minutes** for problem 2.
- Stuck for 10 straight minutes? Open **one** hint level below, not all of them.
- Python or TypeScript — pick one, do both if you have time.
- When it passes on LeetCode, paste it into [`my-code/`](my-code/) and fill in the log. Then come back to me and say **"done with pattern 1"** and I'll review what you wrote.

---

## Problem 1 · Two Sum II — Input Array Is Sorted

[LeetCode 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) · Medium (really easy once you see it) · **timebox 25 min**

> Given a **1-indexed** array of integers `numbers` that is already **sorted in non-decreasing order**, find two numbers that add up to `target`. Return their indices as `[index1, index2]` where `1 <= index1 < index2 <= numbers.length`. Exactly one solution exists, and you may not use the same element twice.
>
> **Your solution must use only constant extra space.**

**Does Two Pointers apply here?** Yes — and I want you to be able to say *why* before you write a line. Two things in that prompt fired the signal. Find them.

**Before you code, answer these in your head:**

1. Which of the two flavours — converging, or slow/fast?
2. When the sum is too small, which pointer moves, and what's the proof that you didn't just skip the answer?
3. What's your invariant?
4. What does "1-indexed" do to your `return` statement?

<details>
<summary>Hint 1 — pattern nudge</summary>

"Sorted" + "find a pair" + "constant extra space". That's three signals from the recognition list. Converging pointers.
</details>

<details>
<summary>Hint 2 — the decision rule</summary>

`left = 0`, `right = len(numbers) - 1`. Compute `numbers[left] + numbers[right]`.

- Too small → you need a bigger number. `numbers[left]` is the smallest thing still available, and it fails even against the largest remaining partner. So it can't be in the answer. `left += 1`.
- Too big → mirror image. `right -= 1`.
- Equal → done.
</details>

<details>
<summary>Hint 3 — the gotcha that fails your submission</summary>

The array is **1-indexed**. Return `[left + 1, right + 1]`, not `[left, right]`.
</details>

---

## Problem 2 · Container With Most Water

[LeetCode 11](https://leetcode.com/problems/container-with-most-water/) · Medium · **timebox 35 min**

> Given an integer array `height` of length `n`, where `height[i]` is a vertical line at coordinate `i`, find two lines that together with the x-axis form a container holding the most water. Return that maximum amount.
>
> Area between lines `i` and `j` is `min(height[i], height[j]) * (j - i)`.

**Does Two Pointers apply here?** Yes — but the array is **not sorted**, which should bother you given everything I said about sorting. Work out why the discard rule is still provable here. That reasoning *is* the problem; the code is six lines.

**Before you code:**

1. What's the brute force, and its complexity?
2. Start with `left = 0, right = n - 1`. That's the **widest** possible container. Every other container is narrower.
3. Now the key question: **if you must move one pointer inward, which one, and why is the other one safe to keep?**

<details>
<summary>Hint 1 — reframe it</summary>

Area = `min(left_height, right_height) * width`. You start at maximum width. Any move you make shrinks the width. So the *only* way to ever beat the current area is to increase the height — which means `min(left_height, right_height)` has to get bigger.
</details>

<details>
<summary>Hint 2 — the discard proof</summary>

Say `height[left] < height[right]`. Consider every container that uses `left` as one of its walls. All of them are narrower than the current one, and all of them are capped at `height[left]` (the shorter wall always caps the area). So none of them can beat what you just measured. **`left` is used up — discard it.** Move `left` inward. If `height[right]` is the shorter one, mirror it.

This is the same "safely throw away one side" precondition from the lesson. The array isn't sorted, but the *shorter wall* gives you the proof instead.
</details>

<details>
<summary>Hint 3 — shape of the loop</summary>

```
best = 0
left, right = 0, n - 1
while left < right:
    best = max(best, min(h[left], h[right]) * (right - left))
    if h[left] < h[right]:
        left += 1
    else:
        right -= 1
return best
```

Compute the area **before** moving. And note you never break early — you have to scan the whole way.
</details>

---

## Recognition check · no coding

This is the muscle the whole repo is training: looking at a problem and knowing within 60 seconds whether a pattern fits. Write your answers down, then open [verdict.md](verdict.md).

For each, answer: **can Two Pointers solve this, and if so which flavour? If not, what's the actual pattern and why does two pointers fail?**

1. **[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)** — given an integer array, return `true` if any value appears at least twice.
2. **[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)** — given daily prices, pick one day to buy and a later day to sell for maximum profit. Return 0 if no profit is possible.

Both are ones you listed. One of the two answers is genuinely arguable — commit to a position before you look.

---

## Bring back to me

When you've submitted both:

1. Your passing code in [`my-code/`](my-code/) with the log filled in.
2. Your written answers to the recognition check.
3. Honestly: which step of the 35-minute script did you skip? (Everyone skips one. Usually "brute force out loud.")

Then say **"done with pattern 1"** and I'll review the code, tell you what an interviewer would have flagged, and unlock Pattern 02.
