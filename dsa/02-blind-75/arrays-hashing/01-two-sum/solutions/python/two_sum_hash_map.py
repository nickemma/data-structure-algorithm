def two_sum(numbers: list[int], target: int) -> list[int]:
    index_by_value: dict[int, int] = {}

    for index, value in enumerate(numbers):
        complement = target - value
        if complement in index_by_value:
            return [index_by_value[complement], index]
        index_by_value[value] = index

    raise ValueError("No pair adds to the target")
