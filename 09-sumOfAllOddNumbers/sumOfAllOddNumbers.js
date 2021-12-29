function sumOfAllOddNumbers(nums) {
    let oddCounter = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1)
            oddCounter++;
    }

    return oddCounter;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;