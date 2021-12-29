function sumOfAllEvenNumbers(nums) {
    let evenCounter = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0)
            evenCounter++;
    }

    return evenCounter;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;