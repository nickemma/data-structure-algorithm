# Mock 01 — Arrays & Hashing

**Timebox:** 45 minutes  
**Rule:** Do not open any solution files while running this mock.

## Candidate prompt

Choose one:

- Solve Two Sum from a blank editor, including brute force and the optimal approach.
- Explain how you would compute product-of-array-except-self without division.

## Interviewer checklist

- Did the candidate clarify whether original indices are needed?
- Did they articulate the brute-force baseline before optimising?
- Did they name the complement/invariant for a hash map?
- Did they test duplicates such as `[3, 3]`?
- Did they state time and space complexity accurately?

## Scoring rubric

| Area | Strong signal |
| --- | --- |
| Problem framing | Restates input/output and calls out assumptions |
| Reasoning | Finds repeated work and selects a fitting data structure |
| Implementation | Uses clear names and avoids reusing an element |
| Testing | Covers ordinary, duplicate, and boundary cases |
| Communication | Explains trade-offs concisely |

## Debrief

Write down one sentence that would help future-you recognise this pattern. Example: “When every current value needs one specific earlier complement, scan once with a value-to-index map.”
