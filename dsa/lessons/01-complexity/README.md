# D01 — How does work grow?

**Goal:** explain how the work and extra memory of a function change as its input grows. Prerequisite: read a function and a loop; use [D00](../00-python/README.md) if needed.

## Concept and intuition

Let n be the number of elements in the input. Instead of measuring seconds on one computer, count the operations that matter as n grows. For now, assume accessing an element and comparing ordinary bounded-size integers take constant time.

Big-O describes an upper bound on growth. We normally report a tight worst-case bound in an interview. Best case, worst case, and expected behavior can differ, so say which you mean.

## Implementation and worked examples

```python
def first_user(users):
    if not users:
        return None
    return users[0]
```

This performs a fixed amount of work whether the list contains 10 or 10 million items: **O(1) time**. The empty-list check makes its behavior defined for an empty input. It does not copy the input and uses **O(1) auxiliary space**.

```python
def find_user(users, target):
    for user in users:
        if user == target:
            return True
    return False
```

Trace `find_user(["Ada", "Lin", "Sam"], "Sam")`: compare Ada, then Lin, then Sam. Three elements inspected. If the target is absent, every element is inspected. If it is first, only one is inspected.

Under a constant-cost equality assumption, worst-case work grows with n: **O(n) time**. Best case for nonempty input is **O(1)**. Holding a reference to the current user does not copy the list: **O(1) auxiliary space**. If names can be arbitrarily long, their comparison cost needs its own bound; for this example we are isolating the number of elements inspected.

```python
for a in nums:
    for b in nums:
        compare(a, b)  # Imagine a constant-time operation.
```

For 3 elements, the inner operation runs 3 times for each of 3 outer iterations: 9 total. For n elements it runs n × n times: **O(n²)**. This is pseudocode illustrating counts, not a standalone program.

| n | One access | Full scan | Full pair scan |
| --- | --- | --- | --- |
| 10 | 1 | 10 | 100 |
| 100 | 1 | 100 | 10,000 |
| 1,000 | 1 | 1,000 | 1,000,000 |

Constant factors do not change the growth class: two full sequential scans are still O(n). Nested loops require counting their actual work; nesting alone does not determine the answer.

## Space: what are we counting?

Auxiliary space means additional working storage beyond the input. Count the maximum amount alive at once, not how many times a variable is assigned. A few counters need constant space; a new copy containing n elements needs space proportional to n. Recursion also uses memory; we will study its call stack later.

## Your first exercise — reason before coding

Given a list of integers, return whether any value occurs more than once:

```python
def contains_duplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False
```

Expected behavior: `[4, 1, 4]` returns `True`; `[4, 1, 7]` and `[]` return `False`.

1. What is the **worst-case time complexity**? Explain how many comparisons happen when all values are distinct. Try listing the compared index pairs for four elements.
2. What is the **auxiliary space complexity**? Explain what is stored and whether it grows with the input.
3. Can you describe a way to get **approximately linear time**? Plain English is enough. What information would you retain, and what memory cost might that introduce?

Answer in chat or in [attempt.md](attempt.md). Uncertainty is welcome: include the step that you cannot yet justify. We will use your answer to decide the next hint. The optimized code and answer key are intentionally absent from this lesson.

## After we review that attempt

We will distinguish early-return behavior from the worst case, derive the comparison count, examine a possible improvement and its assumptions, then implement and test it together. Afterward you will analyze these fresh variations:

- One full scan of n items followed by another full scan of n items.
- Every item in a list of length n compared with every item in a different list of length m.
- A loop that repeatedly halves a positive integer until it reaches 1.
- A function that copies all n input elements before returning one element.

The checkpoint is explaining both time and auxiliary space on a new snippet without relying on “one loop” or “two loops” as the entire argument. Then we move to D02, arrays and strings.
