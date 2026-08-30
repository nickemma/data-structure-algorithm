export function threeSum(numbers: number[]): number[][] {
  const uniqueTriplets = new Set<string>();

  for (let first = 0; first < numbers.length; first += 1) {
    for (let second = first + 1; second < numbers.length; second += 1) {
      for (let third = second + 1; third < numbers.length; third += 1) {
        if (numbers[first] + numbers[second] + numbers[third] === 0) {
          const triplet = [numbers[first], numbers[second], numbers[third]].sort((a, b) => a - b);
          uniqueTriplets.add(triplet.join(","));
        }
      }
    }
  }

  return [...uniqueTriplets].map((triplet) => triplet.split(",").map(Number));
}
