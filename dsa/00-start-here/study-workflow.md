# The attempt workflow

Use this same routine for every question.

1. **Clarify.** Restate the input, output, assumptions, and whether the answer must preserve ordering or indices.
2. **Example.** Make a tiny example and trace the expected result by hand.
3. **Brute force.** Say the direct exhaustive method first. This gives you a correctness baseline.
4. **Find repeated work.** Ask whether you repeatedly search, compare, recompute, or store more than necessary.
5. **Name the pattern.** Hash map, two pointers, sliding window, DFS/BFS, binary search, heap, DP, and so on.
6. **State the invariant.** What remains true after each loop iteration or recursive call?
7. **Code and test.** Cover empty input, a one-element input, duplicates, boundaries, and invalid/unusual cases when the prompt permits them.
8. **Communicate.** Explain time and space complexity plus the trade-off you made.

## Hint ladder

Only reveal one level at a time:

1. Pattern nudge
2. Data-structure nudge
3. Invariant or pseudocode
4. Full walkthrough
5. Reference solution
