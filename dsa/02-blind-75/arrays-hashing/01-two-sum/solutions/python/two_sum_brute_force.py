def two_sum(numbers: list[int], target: int) -> list[int]:
    for left in range(len(numbers)):
        for right in range(left + 1, len(numbers)):
            if numbers[left] + numbers[right] == target:
                return [left, right]
    raise ValueError("No pair adds to the target")
