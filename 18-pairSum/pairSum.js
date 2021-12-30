function pairSum(nums, target) {
    for (let i of nums) {
        for (let j of nums) {
            if (nums[i] + nums[j] === target)
                return true;
            else
                return false;
        }
    }
}

// Do not edit this line;
module.exports = pairSum;