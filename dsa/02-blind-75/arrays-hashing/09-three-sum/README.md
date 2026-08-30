# Three Sum — Sort + two pointers

**Role:** Learn together, after Two Sum and the Two Pointers MCQ  
**Original problem:** [LeetCode — 3Sum](https://leetcode.com/problems/3sum/)

Return every unique triplet of values from an integer list whose sum is zero. The input may contain duplicate values; duplicate triplets must appear only once.

## Read in this order

1. [Try it yourself](01-try-it-yourself.md)
2. [Hints](02-hints.md)
3. [Explanation](03-explanation.md)
4. [Visual trace](visual-trace.md)
5. `solutions/`

## Recognition signal

The question asks for unique triples, but fixing one value turns the remainder into a two-value target search. Sorting makes pointer movement logically safe and makes duplicate removal local.
