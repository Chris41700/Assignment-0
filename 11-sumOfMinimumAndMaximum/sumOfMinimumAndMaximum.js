function sumOfMinimumAndMaximum(nums) {
    let sum = 0;

    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || i == nums.length - 1)
            sum += nums[i];
    }

    return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;