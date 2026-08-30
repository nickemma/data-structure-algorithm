# Explanation — Three Sum

## Brute force

Check every triple of indices and retain each zero-sum triple in a set after normalising its order. This proves the problem is solvable, but has cubic time and duplicate-management overhead.

- Time: O(n³)
- Extra space: O(number of unique triplets), plus set storage

## Optimal: sort, anchor, and sweep

Sort the array. Each iteration fixes an `anchor`; the remaining task is a sorted pair search. With `left` and `right` pointers, moving `left` right increases the total and moving `right` left decreases it. A match is recorded once, then repeated values are skipped.

- Time: O(n²): O(n log n) to sort, then at most O(n) pointer movement for each anchor
- Extra space: O(1) beyond sorting and output, depending on the language's sort implementation

## Invariants

- Before each pointer move, every pair outside `[left, right]` for this anchor has been ruled out or processed.
- Pointer movement is safe because the remaining values are sorted.
- Skipping repeated anchors and pointer values never removes a *new value triplet*; it only prevents producing the same triplet again.

## Interview narration

“I can fix the first value and reduce the rest to Two Sum. Sorting lets me replace a hash map with a two-pointer sweep and makes it easy to remove duplicate triplets. For a total that is too small I increase the left value; for one that is too large I decrease the right value.”
