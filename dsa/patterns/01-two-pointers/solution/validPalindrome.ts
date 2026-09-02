/**
 * LeetCode 125 - Valid Palindrome.
 *
 * Pattern: Two Pointers (converging / opposite ends).
 *
 * Contract:
 *   in : s, a string of printable ASCII (may be empty)
 *   out: true if s reads the same forwards and backwards once we lowercase
 *        it and drop every non-alphanumeric character
 *
 * Run: npx tsx validPalindrome.ts   (or paste into the LeetCode editor)
 */

const isAlnum = (c: string): boolean => /[a-z0-9]/i.test(c);

/**
 * Baseline. Build a cleaned copy, compare it to its reverse.
 * Time O(n) / Space O(n) -- the copy is the cost we want to remove.
 */
export function isPalindromeBrute(s: string): boolean {
  const cleaned = [...s.toLowerCase()].filter(isAlnum).join("");
  return cleaned === [...cleaned].reverse().join("");
}

/**
 * Optimal. Walk two pointers inward over the original string.
 *
 * Invariant: everything outside [left, right] is already a verified
 * matching pair.
 *
 * Time O(n) -- each pointer only moves inward, n moves total
 * Space O(1) -- two integers
 */
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // The `left < right` guard inside these skips is load-bearing:
    // without it, an all-punctuation string walks off the end.
    while (left < right && !isAlnum(s[left])) left++;
    while (left < right && !isAlnum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

const CASES: Array<[string, boolean]> = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  ["", true], // empty
  ["a", true], // single character
  ["ab", false], // two characters
  [".,", true], // no alphanumerics at all
  ["0P", false], // trap: both alnum, differ only by case-mapping
  ["aa", true],
  [" ", true],
];

for (const [text, expected] of CASES) {
  for (const fn of [isPalindromeBrute, isPalindrome]) {
    const got = fn(text);
    console.log(`${got === expected ? "ok  " : "FAIL"} ${fn.name.padEnd(20)} ${JSON.stringify(text).padEnd(35)} -> ${got}`);
  }
}
