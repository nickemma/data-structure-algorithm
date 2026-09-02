# Verdict — recognition check answers

> Write your own answers first. Reading these before you commit to a position teaches you nothing.

---

## 1. Contains Duplicate → **No. Use a hash set.**

**Why two pointers fails:** the precondition is "by looking at two positions, I can safely discard one side." Here the array is unsorted and the question is about *any* two equal values anywhere. Looking at `nums[left]` and `nums[right]` tells you nothing about whether a duplicate exists between them. There is no discard rule, so there is no pattern.

**What actually solves it:** a hash set. One pass, ask "have I seen this before?"

```python
def contains_duplicate(nums: list[int]) -> bool:
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False
```

```typescript
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
```

O(n) time, O(n) space. (`return len(set(nums)) != len(nums)` is the one-liner. Write the loop in an interview — it shows you know what the one-liner costs.)

**The trap answer:** "Sort it, then compare each element to its neighbour." That *is* correct, and it's O(1) extra space, which is a real advantage if you're allowed to modify the input. But it's O(n log n) — you paid a sort to avoid a hash set. Worth mentioning as an alternative; wrong as your primary answer.

And note: after sorting you're comparing `nums[i]` against `nums[i+1]`. That's a single scan with a lookahead, not two converging pointers. If you called that "two pointers" in an interview you wouldn't be *wrong* exactly, but you'd be stretching the name past where it's useful.

**Signal to remember:** "does X exist / how many times have I seen X" → hash set or hash map. Never two pointers.

---

## 2. Best Time to Buy and Sell Stock → **Yes, actually. Flavour B.** (This was the arguable one.)

Most people file this under "greedy one-pass" or dynamic programming, and if you said that, you're in good company and you'd pass the interview. But it genuinely is a same-direction two-pointer solution, and the pointer framing makes the logic easier to defend:

- `buy` points at the cheapest day seen so far.
- `sell` scans forward.
- If `prices[sell] < prices[buy]`, you have found a *better* day to buy — so **discard the old buy day entirely** and set `buy = sell`. Everything before it is useless: a later, cheaper buy day dominates an earlier, pricier one for every possible future sell day.
- Otherwise record the profit and keep scanning.

That "discard" is the same precondition from the lesson, so it earns the name.

```python
def max_profit(prices: list[int]) -> int:
    buy, best = 0, 0
    for sell in range(1, len(prices)):
        if prices[sell] < prices[buy]:
            buy = sell                       # cheaper buy day dominates
        else:
            best = max(best, prices[sell] - prices[buy])
    return best
```

```typescript
function maxProfit(prices: number[]): number {
  let buy = 0;
  let best = 0;
  for (let sell = 1; sell < prices.length; sell++) {
    if (prices[sell] < prices[buy]) buy = sell;
    else best = Math.max(best, prices[sell] - prices[buy]);
  }
  return best;
}
```

O(n) time, O(1) space.

**Why it is NOT converging pointers:** you might have reached for `left = 0, right = n - 1`. That breaks immediately — you must buy *before* you sell, so the pointers can't be symmetric. Direction matters here. That asymmetry is the tell for flavour B.

**The identical solution, stated differently** — which is what you'll see in most editorials:

```python
def max_profit(prices: list[int]) -> int:
    cheapest, best = float("inf"), 0
    for price in prices:
        cheapest = min(cheapest, price)
        best = max(best, price - cheapest)
    return best
```

Same algorithm. `cheapest` *is* the buy pointer, just stored as a value instead of an index. Recognising that two pieces of code are the same algorithm wearing different clothes is a large part of getting good at this.

---

## What this exercise was actually for

Three problems that all look like "scan an array and compare things":

| Problem | Pattern | Why |
| --- | --- | --- |
| Valid Palindrome | Two pointers, converging | Symmetry — position i must match n-1-i |
| Two Sum II | Two pointers, converging | Sorted, so "too small/too big" is a provable discard |
| Container With Most Water | Two pointers, converging | The shorter wall caps every container that uses it |
| Best Time to Buy/Sell | Two pointers, slow/fast | A cheaper later day dominates an earlier pricier one |
| Two Sum (classic) | Hash map | Unsorted + must return original indices |
| Contains Duplicate | Hash set | Question is "have I seen this", not "find a pair" |

The pattern is never in the surface of the problem. It's in whether you can **prove something is safe to discard**. When you can, two pointers. When you instead need to *remember what you've seen*, hash map.

Carry that sentence into Pattern 02.
