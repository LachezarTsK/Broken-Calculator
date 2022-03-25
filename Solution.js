
/**
 * @param {number} startValue
 * @param {number} targetValue
 * @return {number}
 */
var brokenCalc = function (startValue, targetValue) {

    let numberOfOperations = 0;
    while (startValue < targetValue) {
        if (targetValue % 2 === 0) {
            targetValue /= 2;
        } else {
            targetValue++;
        }
        numberOfOperations++;
    }

    return numberOfOperations + startValue - targetValue;
};
