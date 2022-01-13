/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        var j = nums.indexOf(target - nums[i], i + 1)
        if (j !== -1) return [i, j]
    }
};