# D00 — Python warm-up

Use Python 3 for new exercises. Run `python3 --version` to check your local interpreter. We begin with functions, loops, and lists, then introduce other tools when a problem needs them.

```python
def count_positive(nums):
    count = 0
    for number in nums:
        if number > 0:
            count += 1
    return count

assert count_positive([-2, 0, 4, 7]) == 2
assert count_positive([]) == 0
```

`def` defines a function. Indentation groups statements. `for` visits each item. `return` sends a result back to the caller. `assert` checks a condition and raises an error if it is false.

A list such as `[4, 7, 9]` is ordered, mutable, and indexed from zero. `nums[0]` accesses its first item if it exists. `len(nums)` gives its length. `range(3)` produces the values 0, 1, 2 when iterated; its upper bound is excluded. Strings such as `"hello"` are ordered but immutable.

Trace `count_positive([-2, 0, 4, 7])`: write the value of `count` after each iteration. Then independently write `count_negative(nums)` and give three test cases. Explain how `return` inside the loop would change its behavior.

If you can do that comfortably, continue to [D01](../01-complexity/README.md). We will introduce dictionaries, sets, deque, heapq, classes, and recursion in their respective modules.
