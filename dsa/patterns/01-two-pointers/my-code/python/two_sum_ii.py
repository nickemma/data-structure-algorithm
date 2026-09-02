"""LeetCode 167 - Two Sum II (Input Array Is Sorted).

Fill in the contract before you write the body. Yes, before.

Contract:
    in :
    out:
    constraints:
"""


def two_sum_sorted(numbers: list[int], target: int) -> list[int]:
    # TODO: your solution. State the invariant in a comment above the loop.
    raise NotImplementedError


CASES = [
    (([2, 7, 11, 15], 9), [1, 2]),
    (([2, 3, 4], 6), [1, 3]),
    (([-1, 0], -1), [1, 2]),
    (([1, 2, 3, 4, 4, 9, 56, 90], 8), [4, 5]),  # duplicates
    (([5, 25, 75], 100), [2, 3]),               # answer at the end
]

if __name__ == "__main__":
    for (numbers, target), expected in CASES:
        got = two_sum_sorted(numbers, target)
        print(f"{'ok  ' if got == expected else 'FAIL'} {numbers} target={target} -> {got}")

# Pattern:
# Why it fit:
# Cost me:
