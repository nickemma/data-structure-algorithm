# Visual trace — Three Sum

Sorted input: `[-4, -1, -1, 0, 1, 2]`

For `anchor = -1` at index 1:

| anchor | left | right | total | action |
| --- | --- | --- | --- | --- |
| -1 | -1 | 2 | 0 | Record `[-1, -1, 2]`; move both pointers |
| -1 | 0 | 1 | 0 | Record `[-1, 0, 1]`; move both pointers |

When the anchor reaches the duplicate `-1` at index 2, skip it. It would repeat the same search space.
