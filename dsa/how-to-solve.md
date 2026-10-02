# A repeatable problem-solving routine

Practice this untimed first. The goal is to make your reasoning visible and checkable.

1. **Restate the contract.** What are the inputs and outputs? Ask about empty input, duplicates, ordering, mutation, and whether an answer always exists when relevant.
2. **Work a small example by hand.** Include an edge case. Describe how you know the expected output.
3. **Find a correct baseline.** Explain the simplest approach you can justify and estimate its cost. Implement it if it helps establish correctness or if optimization remains unclear.
4. **Identify avoidable work.** What do you search for repeatedly? What do you recompute? Could order, stored information, or a smaller state help?
5. **Justify the improvement.** State what remains true as the algorithm runs. Explain why a discarded candidate cannot be needed later, or why your stored information is sufficient. A pattern name alone is not enough.
6. **Implement the plan.** Use clear names and narrate decisions, uncertainties, and changes. You do not need to narrate every keystroke.
7. **Test deliberately.** Trace a normal case, boundaries, repeated values, and a case that challenges your invariant. Choose cases relevant to the contract.
8. **Analyze and compare.** Define input size, explain time and auxiliary memory, include built-ins and recursion, and name any assumptions or trade-offs.

## Questions that can suggest an approach

| Observation | Candidate to investigate | What to verify |
| --- | --- | --- |
| Repeated membership/count queries | Hash set or map | Expected lookup cost and memory budget |
| Sorted input and pair search | Two pointers | A safe rule for discarding a side |
| Contiguous ranges | Sliding window or prefix sum | Whether window adjustments preserve a useful condition |
| Repeated subproblems | Dynamic programming | State, recurrence, and dependency order |
| Repeated smallest/largest extraction | Heap | Whether sorting once would be simpler |
| Reachability or relationships | Graph traversal | State representation, edges, and visited rules |

These are hypotheses, not automatic mappings. A counterexample is useful: it tells you which assumption failed.

## Later: a 35-minute practice allocation

| Minutes | Work |
| --- | --- |
| 0–5 | Contract and example |
| 5–10 | Baseline and cost |
| 10–15 | Improvement, correctness, and plan |
| 15–28 | Implementation |
| 28–33 | Tests and repairs |
| 33–35 | Complexity and trade-offs |

Adapt to the interviewer and problem. If stuck, say where, try a smaller example, revisit the baseline, or ask for a targeted hint. A hint gives useful information; record it when practicing. No particular script or brute-force solution guarantees an interview pass.

Constraints help judge feasibility, but input size alone does not determine the intended algorithm. Operation costs, language, value ranges, memory limits, and runtime limits also matter.
