import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class ThreeSumTwoPointers {
    private ThreeSumTwoPointers() {}

    public static List<List<Integer>> solve(int[] numbers) {
        int[] sorted = Arrays.copyOf(numbers, numbers.length);
        Arrays.sort(sorted);
        List<List<Integer>> triplets = new ArrayList<>();

        for (int anchor = 0; anchor < sorted.length - 2; anchor++) {
            if (anchor > 0 && sorted[anchor] == sorted[anchor - 1]) {
                continue;
            }
            if (sorted[anchor] > 0) {
                break;
            }

            int left = anchor + 1;
            int right = sorted.length - 1;
            while (left < right) {
                int total = sorted[anchor] + sorted[left] + sorted[right];
                if (total < 0) {
                    left++;
                } else if (total > 0) {
                    right--;
                } else {
                    triplets.add(List.of(sorted[anchor], sorted[left], sorted[right]));
                    left++;
                    right--;
                    while (left < right && sorted[left] == sorted[left - 1]) left++;
                    while (left < right && sorted[right] == sorted[right + 1]) right--;
                }
            }
        }

        return triplets;
    }
}
