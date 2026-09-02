/**
 * LeetCode 11 - Container With Most Water.
 *
 * Contract:
 *   in :
 *   out:
 *   constraints:
 */

export function maxArea(height: number[]): number {
  // TODO: your solution. Before the loop, write the one-line proof for why
  // moving the shorter wall is safe. If you can't write it, you don't have it.
  throw new Error("not implemented");
}

const CASES: Array<[number[], number]> = [
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[1, 1], 1],
  [[4, 3, 2, 1, 4], 16], // best pair is the two outermost
  [[1, 2, 1], 2],
  [[2, 3, 4, 5, 18, 17, 6], 17],
];

for (const [height, expected] of CASES) {
  const got = maxArea(height);
  console.log(`${got === expected ? "ok  " : "FAIL"} [${height}] -> ${got} (want ${expected})`);
}

// Pattern:
// Why it fit:
// Cost me:
