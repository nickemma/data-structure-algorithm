# Walkthrough — Valid Palindrome, on the clock

**Problem:** [LeetCode 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (Easy)

> Given a string `s`, return `true` if it is a palindrome after converting all uppercase letters to lowercase and removing all non-alphanumeric characters. Otherwise return `false`.

This is a real interview transcript, minute by minute. Read it as if you're the candidate speaking. The point is not the answer — it's the *sequence*.

---

## Minute 0–3 · Restate and clarify

**You say:**

> "So I'm given a string. I need to ignore case and ignore anything that isn't a letter or a digit, and then check whether what's left reads the same forwards and backwards. Let me confirm a few things."

**You ask:**

1. *"Is the empty string a palindrome?"* → Yes. (LeetCode says yes. Ask anyway — this is your edge case.)
2. *"Do digits count as alphanumeric here?"* → Yes, `0a0` is a palindrome.
3. *"Am I allowed to build a cleaned-up copy of the string, or do you want O(1) extra space?"* → **Ask this one every time.** The answer tells you which solution they want.

That third question is the whole interview. If they say "O(1) space," they have just told you: two pointers.

## Minute 3–6 · Example by hand

Write this on the screen:

```
s = "A man, a plan, a canal: Panama"
cleaned -> "amanaplanacanalpanama"
reversed -> "amanaplanacanalpanama"     same  -> true

s = "race a car"
cleaned -> "raceacar"
reversed -> "racaecar"                  different -> false
```

Now you have two test cases for minute 28, and you've proved you understood the prompt.

## Minute 6–9 · Brute force, out loud

**You say:**

> "The simplest correct version: build a new string with only lowercase alphanumeric characters, then compare it to its reverse. That's O(n) time, but O(n) extra space for the cleaned copy and the reversed copy."

```python
def is_palindrome_brute(s: str) -> bool:
    cleaned = [c.lower() for c in s if c.isalnum()]
    return cleaned == cleaned[::-1]
```

**Say this even though it's short.** It's correct, it's a baseline, and it gives you something to improve. If your mind goes blank later, this passes.

## Minute 9–13 · Find the waste, name the pattern

**You say:**

> "The waste here is memory, not time — I'm allocating a whole second copy of the string just to compare it against itself. But a palindrome is a *symmetry* property: character 0 must match character n-1, character 1 must match n-2, and so on inward. I can check that directly on the original string with two pointers walking toward each other, skipping non-alphanumeric characters as I go. That gets me to O(1) extra space."

Go back and look at the signal list in [README.md](README.md#5-how-to-recognise-it): *palindrome / symmetry* and *"O(1) extra space."* Both fired. That's your evidence, and saying the evidence out loud is what interviewers score.

## Minute 13–15 · State the plan and the invariant

**You say:**

> "`left` starts at 0, `right` at the last index. While they haven't crossed: if `left` isn't alphanumeric, advance it. If `right` isn't, retreat it. Once both point at real characters, compare them lowercased — if they differ, return false immediately. If they match, move both inward. If I get through the whole loop, return true.
>
> The invariant is: **everything outside `left` and `right` has already been verified as a matching pair.**"

Wait for the nod. *Then* type.

## Minute 15–28 · Code it, narrating

```python
def is_palindrome(s: str) -> bool:
    left, right = 0, len(s) - 1

    while left < right:
        # skip anything that isn't a letter or digit
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True
```

```typescript
function isPalindrome(s: string): boolean {
  const isAlnum = (c: string): boolean => /[a-z0-9]/i.test(c);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlnum(s[left])) left++;
    while (left < right && !isAlnum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}
```

Both files are in [`solution/`](solution/) so you can run them.

**Three things to narrate while typing — these are the actual difficulty of this problem:**

1. **The inner skip loops need `left < right` in their own condition too.** Without it, a string of pure punctuation like `",,,"` runs `left` past `right` and off the end of the string. This is the bug interviewers are watching for.
2. **`return False` on the first mismatch.** No need to keep looking.
3. **Why `while left < right` and not `<=`:** if they land on the same character, that character is the middle and is trivially equal to itself. Nothing to check.

## Minute 28–33 · Test by hand

Point at your code and walk it. Out loud.

| Input | Expected | Trace |
| --- | --- | --- |
| `"aba"` | `true` | `a==a`, then left=1 right=1, loop ends → true |
| `"ab"` | `false` | `a != b` → false |
| `""` | `true` | left=0, right=-1, loop never runs → true |
| `"a"` | `true` | left=0, right=0, loop never runs → true |
| `".,"` | `true` | skip loops push left to 1, `left < right` fails → true |
| `"0P"` | `false` | the classic trap: `'0'` and `'P'` are both alnum but not equal → false |

That last one is real — it's a LeetCode test case that breaks solutions using ASCII arithmetic instead of `.lower()`.

## Minute 33–35 · Complexity and trade-off

**You say:**

> "Time is O(n): each pointer only ever moves inward, so together they take at most n steps — the nested skip loops don't make it quadratic because they consume the same budget. Space is O(1), just two integers.
>
> The trade-off versus the cleaned-copy version: that one is arguably more readable and easier to get right, and it's the same O(n) time. I'd only reach for two pointers here because you asked for constant space."

That last sentence — naming *when the simpler solution is actually better* — reads as senior. Say it.

---

# The Two Sum fork: does this pattern apply?

You'll notice Two Sum is the problem everyone starts with, and it *looks* like a two-pointer problem: find a pair, in an array. Here's the honest answer, because recognising a **near miss** is the skill.

### [LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/): unsorted, return **indices**

**Two pointers does NOT apply.** The precondition fails. To converge pointers you need to know which side is too small — that requires sorted input. And if you sort it, you destroy the original indices, which are the thing you were asked to return.

You *can* patch it (store `(value, index)` pairs, sort those, then converge) but you've paid O(n log n) for a problem that has an O(n) answer. In an interview that's a worse answer.

**Right pattern: hash map** (Pattern 02, next up). One pass, and for each number ask "have I already seen `target - x`?"

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}                              # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i                        # store AFTER checking
    return []
```

O(n) time, O(n) space. Note the ordering: check *then* store, otherwise `target = 6, nums = [3, ...]` matches 3 with itself.

### [LeetCode 167 — Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/): sorted, return **positions**

**Two pointers absolutely applies**, and it's your first practice problem. Same question, one word changed in the constraints — and that one word flips the pattern. That flip is what the whole exercise is training.

---

Now go do [practice.md](practice.md). Don't read [verdict.md](verdict.md) until it tells you to.
