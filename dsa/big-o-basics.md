# Complexity refresher

Start with [Lesson 01](lessons/01-complexity/README.md) first. This is a reference for later practice.

Define the input size and count work as it grows. Big-O is an asymptotic upper bound; in interviews we usually aim to give a tight bound for the stated case. It does not measure seconds. State worst-case time by default, and label expected or amortized claims explicitly.

| Growth | Example under the usual interview cost model |
| --- | --- |
| O(1) | List indexing |
| O(log n) | Halving a search interval |
| O(n) | Scanning n items once |
| O(n log n) | Merge sort |
| O(n²) | Comparing every ordered pair of n items |
| O(2ⁿ) | Number of subsets; materializing every subset costs O(n · 2ⁿ) overall |

Two sequential scans of sizes n and m cost O(n + m). Nested full scans cost O(nm). For nested loops with changing bounds, count total iterations rather than multiplying mechanically. Pointer movements can total O(n) even when the code has a nested loop.

Auxiliary space counts additional working memory, including recursion frames, temporary copies, and library allocations. State output space separately when helpful; total space also includes the input. A list slice of k elements takes O(k) time and extra space.

## Python costs to learn as they arise

- List membership scans up to n items: O(n), assuming constant-cost comparisons.
- Dictionary/set lookup is expected O(1) for ordinary keys under typical hashing assumptions; collision-heavy worst cases can be O(n). Key hashing/comparison can also depend on key size.
- List append is amortized O(1); an individual resize can cost O(n).
- List insertion/removal at the front is O(n); deque end operations support O(1) insertion/removal.
- Python's comparison sorting has O(n log n) worst-case time and can use O(n) auxiliary space. An in-place API does not imply constant auxiliary space. Already ordered inputs can take less time.
- Recursive depth d uses O(d) stack space for constant-size frames, plus any other retained data.

We initially treat bounded-size arithmetic and comparisons as constant cost. Very large integers, long strings, and expensive custom comparisons require a more detailed model. Learn the simple model first, then state its limits when relevant.
