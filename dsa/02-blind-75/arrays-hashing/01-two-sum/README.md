# Two Sum — Hash map / complement lookup

**Role:** Learn together  
**Original problem:** [LeetCode — Two Sum](https://leetcode.com/problems/two-sum/)

Given a list of integers and a target, return the indices of two distinct elements whose values add to that target. You may assume a valid pair exists.

## Read in this order

1. [Try it yourself](01-try-it-yourself.md)
2. [Hints](02-hints.md) — only if stuck
3. [Explanation](03-explanation.md)
4. [Visual trace](visual-trace.md)
5. [Test cases](test-cases.md)
6. `solutions/` in your preferred language

## Recognition signal

You repeatedly need to answer: “Have I already seen the value that would complete this pair?” That is a hash-map lookup of the **complement**.

## Complexity target

The optimal approach should take O(n) time and O(n) extra space.
