def three_sum(numbers: list[int]) -> list[list[int]]:
    sorted_numbers = sorted(numbers)
    triplets: list[list[int]] = []

    for anchor, value in enumerate(sorted_numbers[:-2]):
        if anchor > 0 and value == sorted_numbers[anchor - 1]:
            continue
        if value > 0:
            break

        left, right = anchor + 1, len(sorted_numbers) - 1
        while left < right:
            total = value + sorted_numbers[left] + sorted_numbers[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                triplets.append([value, sorted_numbers[left], sorted_numbers[right]])
                left += 1
                right -= 1
                while left < right and sorted_numbers[left] == sorted_numbers[left - 1]:
                    left += 1
                while left < right and sorted_numbers[right] == sorted_numbers[right + 1]:
                    right -= 1

    return triplets
