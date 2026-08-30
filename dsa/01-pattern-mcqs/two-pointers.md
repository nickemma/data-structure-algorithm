# Two Pointers — recognition MCQs

## 1. Sorted pair search

You have a sorted array and need two values that add to a target. If the current sum is too small, which pointer can move without losing a possible answer?

- A. The right pointer left
- B. The left pointer right
- C. Either pointer in either direction
- D. Neither; use recursion

## 2. Three Sum

After sorting an array, you fix one number and need two other numbers whose total cancels it. What is the useful reduction?

- A. Use a sliding window over the remaining values
- B. Run a two-pointer pair search on the suffix
- C. Start a new hash map for every bit position
- D. Use binary search only once

## 3. Duplicate output

Why do sorted two-pointer solutions often skip repeated values?

- A. Duplicates are always invalid input
- B. It makes sorting faster
- C. The same values would create the same output combination again
- D. It changes O(n²) to O(n)

## Answer key

1. **B.** Moving left right increases the sum; moving right left would make it smaller.
2. **B.** Fixing one value reduces Three Sum to a sorted Two Sum search.
3. **C.** Skipping duplicates keeps results unique. It does not change the asymptotic running time.
