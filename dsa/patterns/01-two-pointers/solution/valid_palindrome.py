"""LeetCode 125 - Valid Palindrome.

Pattern: Two Pointers (converging / opposite ends).

Contract:
    in : s, a string of printable ASCII (may be empty)
    out: True if s reads the same forwards and backwards once we lowercase
         it and drop every non-alphanumeric character

Run: python3 valid_palindrome.py
"""


def is_palindrome_brute(s: str) -> bool:
    """Baseline. Build a cleaned copy, compare it to its reverse.

    Time  O(n)
    Space O(n)  -- the cleaned copy is the cost we want to remove
    """
    cleaned = [c.lower() for c in s if c.isalnum()]
    return cleaned == cleaned[::-1]


def is_palindrome(s: str) -> bool:
    """Optimal. Walk two pointers inward over the original string.

    Invariant: everything outside [left, right] is already a verified
    matching pair.

    Time  O(n)  -- each pointer only moves inward, n moves total
    Space O(1)  -- two integers
    """
    left, right = 0, len(s) - 1

    while left < right:
        # The `left < right` guard inside these skips is load-bearing:
        # without it, an all-punctuation string walks off the end.
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True


CASES = [
    ("A man, a plan, a canal: Panama", True),
    ("race a car", False),
    ("", True),                 # empty
    ("a", True),                # single character
    ("ab", False),              # two characters
    (".,", True),               # no alphanumerics at all
    ("0P", False),              # trap: both alnum, differ only by case-mapping
    ("aa", True),
    (" ", True),
]

if __name__ == "__main__":
    for text, expected in CASES:
        for fn in (is_palindrome_brute, is_palindrome):
            got = fn(text)
            status = "ok  " if got == expected else "FAIL"
            print(f"{status} {fn.__name__:22} {text!r:35} -> {got}")
