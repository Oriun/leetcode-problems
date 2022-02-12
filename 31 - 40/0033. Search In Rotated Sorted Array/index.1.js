/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 1) return nums == target ? 0 : -1
    let j = 0, k = nums.length - 1, l
    if (nums[j] === target) return j
    if (nums[k] === target) return k
    let rotated = nums[j] > nums[k]
    let inLeftPart = target > nums[k]

    while (k - j - 1) {
        l = Math.floor((j + k) * .5)
        if (nums[l] === target) return l
        if (rotated) {
            if (!inLeftPart) {
                if (!(nums[l] < target) && nums[l] < nums[nums.length - 1])
                    k = l
                else j = l
            } else {
                if (nums[l] > nums[0] && nums[l] < target) j = l
                else k = l
            }
        } else {
            if (nums[l] < target) j = l
            if (nums[l] > target) k = l
        }
    }
    if(nums[k] === target) return k
    if(nums[j] === target)return j
    return -1
};