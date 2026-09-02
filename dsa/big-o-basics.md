# Big-O in 10 minutes

You need exactly this much to pass interviews. Not more.

## What it measures

Big-O answers one question: **as the input gets bigger, how much slower does this get?**

It is not seconds. It is shape. Constants are dropped: 3n and n/2 and n+100 are all "O(n)", because for large n the shape is a straight line.

## Counting it

Count how many times the innermost operation runs, in terms of `n` (the input size).

```python
for x in items:          # runs n times      -> O(n)
    print(x)

for a in items:          # n times
    for b in items:      #   x n times
        print(a, b)      # = n*n             -> O(n^2)

left, right = 0, len(items) - 1
while left < right:      # each step moves a pointer inward
    left += 1            # total moves across both pointers = n
                         #                    -> O(n)
```

Two sequential loops are `O(n) + O(n) = O(2n) = O(n)`. Only **nesting** multiplies.

## The ladder, fastest to slowest

| Notation | Name | n = 1,000,000 feels like | Typical cause |
| --- | --- | --- | --- |
| O(1) | constant | instant | hash map lookup, arithmetic |
| O(log n) | logarithmic | instant (~20 steps) | binary search, balanced tree |
| O(n) | linear | fast | one pass over the input |
| O(n log n) | linearithmic | fine | **sorting**, heap of n items |
| O(n²) | quadratic | too slow | nested loops over the input |
| O(2ⁿ) | exponential | hopeless past n≈25 | naive recursion, all subsets |

## The interview shortcut

Interviewers pick constraints that tell you the answer. Read them:

| If the constraint says | The intended solution is about |
| --- | --- |
| n ≤ 20 | O(2ⁿ) — backtracking / try everything |
| n ≤ 1,000 | O(n²) is fine — don't over-engineer |
| n ≤ 100,000 | O(n log n) — sort, or a heap |
| n ≤ 1,000,000 | O(n) or O(log n) — one pass, or binary search |

Rough rule: a judge like LeetCode does ~10⁸ simple operations per second. If your op count blows past that, you'll time out.

## Space complexity

Same idea, but counting **extra** memory you allocate. The input itself doesn't count.

```python
def has_dupes(nums):
    seen = set()          # grows to n items -> O(n) space
    for n in nums:
        if n in seen: return True
        seen.add(n)
    return False

def is_palindrome(s):
    left, right = 0, len(s) - 1   # two integers -> O(1) space
    ...
```

The most common real trade-off in these interviews: **spend O(n) memory to drop from O(n²) time to O(n) time.** A hash map is that trade. Two pointers is the rarer, better deal — O(n) time at O(1) space — but it only works when the input has structure (usually: it's sorted).

## Things beginners get wrong

- **Sorting is not free.** The moment you call `.sort()`, your solution is at least O(n log n). Say so.
- **`x in my_list` is O(n), `x in my_set` is O(1).** This one line changes a solution from O(n²) to O(n). In TypeScript: `array.includes()` is O(n), `set.has()` is O(1).
- **Recursion uses space.** Depth-d recursion holds d stack frames: O(d) space, even if you allocated nothing.
- **Nested loops aren't automatically O(n²).** If the inner loop's total work across the whole run is n, it's O(n). That is exactly why sliding window and two pointers are fast — go count the pointer moves.
