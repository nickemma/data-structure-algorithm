# Hints — Three Sum

## Hint 1 — Reduce the problem

Sort the values. Fix one position `anchor`, then find two values to its right that total `-numbers[anchor]`.

## Hint 2 — Pair search

Set `left = anchor + 1` and `right = last index`. If the three-value total is below zero, move `left` right; if above zero, move `right` left.

## Hint 3 — Unique results

Skip an anchor if it equals the prior anchor. After finding a triplet, move both pointers and skip repeated left/right values.

## Hint 4 — Useful early exit

Once the sorted anchor is positive, all remaining values are at least as large, so a zero-sum triplet is impossible.
