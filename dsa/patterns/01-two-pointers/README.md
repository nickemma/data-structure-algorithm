# Pattern 01 — Two Pointers

**Status:** unlocked · **Time:** ~90 min lesson, then 2 LeetCode problems on your own

Read this file top to bottom. Then do [walkthrough.md](walkthrough.md) with me. Then go do [practice.md](practice.md) alone.

---

## 1. The problem this pattern solves

You have an array or a string. You need to find a **pair** of positions that satisfy something.

The obvious solution is two nested loops:

```python
for i in range(len(nums)):
    for j in range(i + 1, len(nums)):
        if nums[i] + nums[j] == target:
            return [i, j]
```

That's O(n²). With n = 100,000 it's 5 billion comparisons and you time out.

Two Pointers gets the same answer in O(n) — **one** pass — using two index variables instead of two loops.

## 2. The mental model

Instead of *"check every pair,"* you keep two fingers on the array and move them according to a rule. Each finger only ever moves in one direction, so between them they take at most `n` steps total. One pass. O(n).

```
nums = [1, 3, 4, 6, 8, 11]   target = 12
        ^              ^
      left           right      1 + 11 = 12  ✓ done
```

## 3. The one precondition (this is the whole pattern)

Two pointers works **only if, by looking at the two positions, you can safely throw away one side.**

That's it. That's the entire idea. If you can't prove "this side can't contain the answer," the pattern does not apply and you're just guessing.

Take a **sorted** array and `left + right`:

- Sum is **too small**? Everything from `right` leftward is smaller than `right`, so pairing any of them with `left` is even smaller. `left` is useless — discard it. `left += 1`.
- Sum is **too big**? By the same logic `right` is useless. `right -= 1`.
- Equal? Found it.

Each step throws away exactly one position forever. n positions, n steps, done.

> **This is why sorted input is the loudest signal for this pattern.** Sorting is what makes "the other side is definitely worse" provable.

## 4. The two flavours

### Flavour A — Opposite ends (converging)

Pointers start at both ends and walk toward each other. Use when the question is about a **pair**, or about **symmetry**.

```python
def converging(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        if <condition met>:
            return ...
        elif <left side is the useless one>:
            left += 1
        else:
            right -= 1
    return <not found>
```

```typescript
function converging(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (/* condition met */) return 0;
    if (/* left side is useless */) left++;
    else right--;
  }
  return -1;
}
```

Note `while left < right`, not `<=`. Once they meet there's no pair left.

### Flavour B — Same direction (slow / fast)

Both start at the left. `fast` reads every element; `slow` marks where the good stuff ends. Use for **filtering or rewriting an array in place**.

```python
def move_zeroes(nums):
    slow = 0                        # everything before slow is already correct
    for fast in range(len(nums)):
        if nums[fast] != 0:
            nums[slow], nums[fast] = nums[fast], nums[slow]
            slow += 1
    return nums
```

```typescript
function moveZeroes(nums: number[]): number[] {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}
```

The invariant to say out loud: *"`nums[0..slow)` is the finished part of the answer."*

(A third flavour, **slow/fast on linked lists** for cycle detection, is Pattern 04. Same idea, different data structure.)

## 5. How to recognise it

From the article, the signal is: *linear data structures (arrays, lists, strings)* where you *"need to scan the start and end of a list"* or have *"a sorted list and need to find pairs."*

In practice, reach for it when you see:

- The word **sorted** in the constraints
- **Palindrome**, **reverse**, **mirror**, or anything symmetric
- "Find two numbers that..." / "find a pair such that..."
- "Remove / move / dedupe **in place**" and "**O(1) extra space**"
- A brute force that is two nested loops over the *same* array

## 6. When it does NOT work

This matters as much as when it does. Two pointers fails when:

- **The array is unsorted and you must return original indices.** Sorting destroys the indices. (This is why classic Two Sum is a hash-map problem, not a two-pointer problem — see the walkthrough.)
- **You can't prove which side to discard.** If moving a pointer *might* skip the answer, you have a bug, not an optimisation.
- **You need a count of things seen**, not a pair. That's a hash map.
- **The window has to grow and shrink from the same end** based on a running total. That's Sliding Window (Pattern 03) — a close cousin, but the rule is different.

## 7. Cost

| | Time | Space |
| --- | --- | --- |
| Brute force (nested loops) | O(n²) | O(1) |
| Two pointers, already sorted | **O(n)** | **O(1)** |
| Two pointers, you sort first | O(n log n) | O(1)–O(n) |
| Hash map alternative | O(n) | O(n) |

The headline: two pointers is the one that gets you O(1) space. If the interviewer asks *"can you do it without extra memory?"*, they are asking for this pattern.

---

Next: [walkthrough.md](walkthrough.md) — we solve one together, on the clock.
