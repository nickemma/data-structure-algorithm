export function twoSum(numbers: number[], target: number): [number, number] {
  const indexByValue = new Map<number, number>();

  for (let index = 0; index < numbers.length; index += 1) {
    const value = numbers[index];
    const complement = target - value;
    const complementIndex = indexByValue.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, index];
    }

    indexByValue.set(value, index);
  }

  throw new Error("No pair adds to the target");
}
