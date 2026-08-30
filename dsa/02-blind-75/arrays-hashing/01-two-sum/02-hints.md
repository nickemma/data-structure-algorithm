# Hints — Two Sum

Reveal one section at a time.

## Hint 1 — Pattern

For the current value `x`, do not search every other value. Compute the one value you need: `target - x`.

## Hint 2 — Data structure

Use a map from a previously seen number to its index.

## Hint 3 — Ordering matters

Check whether the complement is already in the map **before** adding the current item. This prevents using one element twice when `target == 2 * x`.

## Hint 4 — Pseudocode

```text
seen = empty map
for each index i and value x:
    needed = target - x
    if needed exists in seen:
        return [seen[needed], i]
    seen[x] = i
```
