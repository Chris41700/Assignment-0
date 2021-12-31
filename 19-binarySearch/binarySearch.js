class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

    binarySearch(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        let mid = Math.floor((start + end) / 2);

        if (nums.length === 1 && nums[0] !== target) {
            return true;

            if (nums[mid] === target)
                return true;
            else if (nums[mid] > target)
                binarySearch(target, nums.slice(start, mid));
            else
                binarySearch(target, nums.slice(mid, end));
        }

        return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;