# Visual trace — Two Sum

Input: `numbers = [2, 7, 11, 15]`, `target = 9`

| i | current | complement needed | seen before checking | action |
| --- | --- | --- | --- | --- |
| 0 | 2 | 7 | `{}` | Store `2 → 0` |
| 1 | 7 | 2 | `{2 → 0}` | Find `2`; return `[0, 1]` |

The key visual beat for an eventual animation is: **current value → required complement → map lookup → pair found**.
