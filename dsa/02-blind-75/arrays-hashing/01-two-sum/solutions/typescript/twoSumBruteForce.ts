export function twoSum(numbers: number[], target: number): [number, number] {
  for (let left = 0; left < numbers.length; left += 1) {
    for (let right = left + 1; right < numbers.length; right += 1) {
      if (numbers[left] + numbers[right] === target) {
        return [left, right];
      }
    }
  }

  throw new Error("No pair adds to the target");
}
