# Arrays & Hashing — recognition MCQs

## 1. Complement lookup

You must return the **original indices** of two values that sum to a target. The values are unsorted and you may use extra memory. What is the strongest starting pattern?

- A. Sort then use two pointers
- B. Store previously seen values in a hash map
- C. Use a sliding window
- D. Recursively try every pair

## 2. Duplicate detection

You only need to decide whether any number appears at least twice. Which fact makes a set useful?

- A. It preserves the input order.
- B. It makes every number smaller.
- C. It records whether a value has been seen already.
- D. It guarantees constant time in every possible implementation.

## 3. Product except self

You need the product of all values except the value at each position, but division is forbidden. What repeated work should you try to eliminate?

- A. Computing the product of the prefix and suffix for every position from scratch
- B. Comparing adjacent values
- C. Sorting the array
- D. Searching for a target

## Answer key

1. **B.** While scanning, ask whether the complement `target - current` was seen earlier. Sorting loses the original indices unless you carry them along and is still not the most direct route.
2. **C.** A set answers the exact question "have I already seen this value?" Expected lookup is constant time.
3. **A.** Prefix and suffix products let one pass reuse work from the left and another reuse work from the right.
