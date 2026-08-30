# Explanation — Two Sum

## Brute force

Try every pair `(i, j)` where `i < j`. The first pair whose values total the target is correct. It is easy to reason about but performs up to roughly `n² / 2` comparisons.

- Time: O(n²)
- Space: O(1), excluding the returned answer

## Intermediate: sort with original indices

Pair each value with its original index, sort the pairs, and move left/right pointers based on whether their sum is too small or too large. This takes O(n log n) time. It works, but sorting is unnecessary and changes the natural input order.

- Time: O(n log n)
- Space: O(n)

## Optimal: one-pass hash map

When visiting a value `x`, the only useful matching value is `target - x`. A map tells us in expected O(1) time whether that complement was previously seen and records its original index.

### Invariant

Before processing position `i`, `seen` contains exactly the values from positions `0` through `i - 1`, mapped to an index where each appeared. Therefore, finding `target - numbers[i]` gives two distinct valid indices.

- Time: O(n) expected
- Space: O(n)

## Interview narration

“The brute-force solution checks every pair in quadratic time. Each number has exactly one complement, though, so I will store earlier values in a map from value to index. For each new value I check its complement first, then store it. This gives linear expected time and preserves the original indices.”
