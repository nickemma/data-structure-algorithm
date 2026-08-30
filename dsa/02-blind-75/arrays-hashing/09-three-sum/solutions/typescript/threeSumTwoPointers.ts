export function threeSum(numbers: number[]): number[][] {
  const sortedNumbers = [...numbers].sort((left, right) => left - right);
  const triplets: number[][] = [];

  for (let anchor = 0; anchor < sortedNumbers.length - 2; anchor += 1) {
    if (anchor > 0 && sortedNumbers[anchor] === sortedNumbers[anchor - 1]) continue;
    if (sortedNumbers[anchor] > 0) break;

    let left = anchor + 1;
    let right = sortedNumbers.length - 1;
    while (left < right) {
      const total = sortedNumbers[anchor] + sortedNumbers[left] + sortedNumbers[right];
      if (total < 0) {
        left += 1;
      } else if (total > 0) {
        right -= 1;
      } else {
        triplets.push([sortedNumbers[anchor], sortedNumbers[left], sortedNumbers[right]]);
        left += 1;
        right -= 1;
        while (left < right && sortedNumbers[left] === sortedNumbers[left - 1]) left += 1;
        while (left < right && sortedNumbers[right] === sortedNumbers[right + 1]) right -= 1;
      }
    }
  }

  return triplets;
}
