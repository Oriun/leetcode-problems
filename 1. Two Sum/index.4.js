/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let memory = {}
    for (let i = 0; i < nums.length; i++) {
        let searched = target - nums[i]
        if (memory.hasOwnProperty(searched)) {
            return [memory[searched], i]
        } else {
            memory[nums[i]] = i
        }
    }
};