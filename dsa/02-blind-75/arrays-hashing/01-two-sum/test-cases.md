# Test cases — Two Sum

| Numbers | Target | Expected property | Why it matters |
| --- | --- | --- | --- |
| `[2, 7, 11, 15]` | `9` | indices `0, 1` | Basic case |
| `[3, 2, 4]` | `6` | indices `1, 2` | Pair is not at the ends |
| `[3, 3]` | `6` | indices `0, 1` | Same value, distinct elements |
| `[-1, -2, -3, -4, -5]` | `-8` | indices `2, 4` | Negative values |

In an interview, clarify whether no-solution input is possible. The canonical problem guarantees a solution, so the reference implementations raise an error only as a defensive fallback.
