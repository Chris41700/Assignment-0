function sumOfNumsWithinARange(nums, start, end) {
    let inRange = 0;

    for (var i = 0; i < nums.length; i++) {
        if (start <= nums[i] && nums[i] <= end)
            inRange++;
    }

    return inRange;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;