import java.util.NoSuchElementException;

public final class TwoSumBruteForce {
    private TwoSumBruteForce() {}

    public static int[] solve(int[] numbers, int target) {
        for (int left = 0; left < numbers.length; left++) {
            for (int right = left + 1; right < numbers.length; right++) {
                if (numbers[left] + numbers[right] == target) {
                    return new int[] {left, right};
                }
            }
        }
        throw new NoSuchElementException("No pair adds to the target");
    }
}
