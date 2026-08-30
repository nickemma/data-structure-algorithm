def three_sum(numbers: list[int]) -> list[list[int]]:
    unique_triplets: set[tuple[int, int, int]] = set()

    for first in range(len(numbers)):
        for second in range(first + 1, len(numbers)):
            for third in range(second + 1, len(numbers)):
                if numbers[first] + numbers[second] + numbers[third] == 0:
                    unique_triplets.add(tuple(sorted((numbers[first], numbers[second], numbers[third]))))

    return [list(triplet) for triplet in unique_triplets]
