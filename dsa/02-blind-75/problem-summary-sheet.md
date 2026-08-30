# Blind 75 summary sheet

Use this as a rapid review sheet. Complete its “your trigger” column after you solve each problem; writing your own recognition phrase is more valuable than rereading mine.

| Problem | Pattern | Trigger | Brute force | Optimal | Common trap | Your trigger |
| --- | --- | --- | --- | --- | --- | --- |
| Two Sum | Hash map | Need a previously seen complement | O(n²) | O(n) | Store before check and reuse same index | |
| Three Sum | Sort + two pointers | Fixed value plus a pair in sorted data | O(n³) | O(n²) | Skip duplicate values | |
| Product Except Self | Prefix/suffix | Need all-but-current values, division forbidden | O(n²) | O(n) | Forget right-to-left pass | |
| Find Minimum Rotated | Binary search | Sorted halves with one rotation | O(n) | O(log n) | Compare middle to right boundary | |
| Longest Substring | Sliding window | Longest valid contiguous range | O(n²) | O(n) | Move left pointer past prior occurrence | |
| Number of Islands | DFS/BFS | Connected regions in a grid | O(rows×cols) | O(rows×cols) | Mark visited before exploring neighbours | |
| Coin Change | 1-D DP | Best answer for every smaller amount | Exponential | O(amount×coins) | Incorrect base case `dp[0]` | |
| Course Schedule | Topological sort | Prerequisite ordering | — | O(V + E) | Direction of graph edges | |
| Merge Intervals | Sort + sweep | Overlapping ranges | O(n²) | O(n log n) | Compare with the last merged interval | |
| Validate BST | DFS bounds | Every descendant must respect ancestor bounds | O(n²) | O(n) | Compare only to parent instead of bounds | |
| Find Median Stream | Two heaps | Need middle after each insertion | Sort each time | O(log n) insert | Keep heap sizes balanced | |

The detailed module for each problem expands this sheet with edge cases and a visual trace.
