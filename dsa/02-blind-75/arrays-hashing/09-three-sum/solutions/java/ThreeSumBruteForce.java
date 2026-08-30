import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public final class ThreeSumBruteForce {
    private ThreeSumBruteForce() {}

    public static List<List<Integer>> solve(int[] numbers) {
        Set<List<Integer>> uniqueTriplets = new HashSet<>();

        for (int first = 0; first < numbers.length; first++) {
            for (int second = first + 1; second < numbers.length; second++) {
                for (int third = second + 1; third < numbers.length; third++) {
                    if (numbers[first] + numbers[second] + numbers[third] == 0) {
                        int[] triplet = {numbers[first], numbers[second], numbers[third]};
                        Arrays.sort(triplet);
                        uniqueTriplets.add(List.of(triplet[0], triplet[1], triplet[2]));
                    }
                }
            }
        }

        return new ArrayList<>(uniqueTriplets);
    }
}
