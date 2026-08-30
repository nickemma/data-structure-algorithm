import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

public final class TwoSumHashMap {
    private TwoSumHashMap() {}

    public static int[] solve(int[] numbers, int target) {
        Map<Integer, Integer> indexByValue = new HashMap<>();

        for (int index = 0; index < numbers.length; index++) {
            int value = numbers[index];
            int complement = target - value;

            if (indexByValue.containsKey(complement)) {
                return new int[] {indexByValue.get(complement), index};
            }

            indexByValue.put(value, index);
        }

        throw new NoSuchElementException("No pair adds to the target");
    }
}
