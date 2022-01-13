/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const checked = new Set()
    for (let i = 0; i < nums.length - 1; i++) {
        if (!checked.has(nums[i])) {
            var j = nums.indexOf(target - nums[i], i + 1)
            if (j === -1) checked.add(nums[i])
            else return [i, j]
        }
    }
};