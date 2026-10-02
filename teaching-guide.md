# Teaching and practice guide

Use [CURRICULUM.md](CURRICULUM.md) as the learning order and the progress trackers as the record of what you can currently do. The learner's latest request can change the pace or topic.

## A session

1. Recall: ask one short question from the last lesson.
2. Concept: explain one new idea in plain language and name its assumptions.
3. Intuition: trace a tiny example or draw the state changes.
4. Implementation: build the core operation in Python, explaining choices.
5. Worked example: solve one anchor problem together, pausing for predictions.
6. Independent exercise: present a different small problem; wait for reasoning before revealing a solution.
7. Review: identify what is correct, the first important gap, and one next action.

For D01, the implementation stage means tracing existing code first. Coding the optimized solution follows the learner's reasoning attempt. Split a module across sessions rather than rushing all seven steps.

## How to help without taking over

Ask for the input/output contract, a hand-worked example, and a simple correct approach. If the learner is stuck, offer one hint at a time:

- H1: a question about the example or constraints.
- H2: identify the repeated work or missing property.
- H3: suggest a representation or data structure.
- H4: outline pseudocode, with a step left for the learner.
- H5: explain a full solution when requested or after an attempted explanation; follow with a fresh variation and later cold retry.

Wait for a response between hints. Do not put the answer to the active exercise in its prompt or starter file. Existing `solution/` and `verdict.md` files are for after an attempt. A request for a direct explanation or solution should be honored; record that it was guided.

Review incomplete attempts too. Point to a concrete counterexample or line of reasoning before rewriting code. Ask the learner to repair the smallest failing part. Code success alone does not establish that the learner can explain or reproduce it.

## DSA reasoning routine

Restate → clarify constraints → example by hand → correct baseline → find avoidable work → explain why the improvement is safe → code → test → analyze.

An invariant is a statement that remains true as the algorithm runs. We will practice showing that it is true initially, preserved by each step, and sufficient for the result at termination. Patterns are useful hypotheses; their names are not correctness proofs.

## Review rubric

Score each dimension 0 (not yet), 1 (with help), or 2 (independent). Use the dimensions to target practice, not just a total score.

| DSA | System design |
| --- | --- |
| Contract and constraints understood | Scope and requirements clear |
| Baseline and improvement explained | Capacity assumptions and units clear |
| Correctness/invariant justified | Read and write flows coherent |
| Implementation and edge cases correct | APIs and data model support access patterns |
| Time and auxiliary space explained | Failure handling and trade-offs justified |
| Reasoning communicated clearly | Design adapted to a changed requirement |

## Timing and review

Begin untimed. A 45–60 minute session can include 10 minutes of recall, 15 of teaching, 20 of attempting, and 10 of review. Stop to discuss a stuck point rather than spending the entire session guessing. Introduce timed practice after the core checkpoint; see the [interview routine](dsa/how-to-solve.md).

For every attempted problem save the reasoning, draft code if any, examples tested, hints received, mistake, and retry dates. Keep the original attempt or a short description of its error when revising. Cold retries start from a blank page, without old code.

## Resuming together

Read the relevant progress tracker and latest saved attempt. Confirm what is demonstrated and what is still uncertain. Start with one retrieval question, then continue the current module. Mark progress only from reviewed work; never infer completion just because a file exists. The curriculum remains visible even when later lesson content has not been developed.
