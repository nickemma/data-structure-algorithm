"""LeetCode 11 - Container With Most Water.

Contract:
    in :
    out:
    constraints:
"""


def max_area(height: list[int]) -> int:
    # TODO: your solution. Before the loop, write the one-line proof for why
    # moving the shorter wall is safe. If you can't write it, you don't have it.
    raise NotImplementedError


CASES = [
    ([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
    ([1, 1], 1),
    ([4, 3, 2, 1, 4], 16),   # best pair is the two outermost
    ([1, 2, 1], 2),
    ([2, 3, 4, 5, 18, 17, 6], 17),
]

if __name__ == "__main__":
    for height, expected in CASES:
        got = max_area(height)
        print(f"{'ok  ' if got == expected else 'FAIL'} {height} -> {got} (want {expected})")

# Pattern:
# Why it fit:
# Cost me:
