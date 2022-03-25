
public class Solution {

    public int brokenCalc(int startValue, int targetValue) {

        int numberOfOperations = 0;
        while (startValue < targetValue) {
            if (targetValue % 2 == 0) {
                targetValue /= 2;
            } else {
                targetValue++;
            }
            numberOfOperations++;
        }

        return numberOfOperations + startValue - targetValue;
    }
}
