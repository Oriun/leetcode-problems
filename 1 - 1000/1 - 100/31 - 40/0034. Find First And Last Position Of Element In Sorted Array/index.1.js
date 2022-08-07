/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let k = null;
    for(let i = 0; i <= nums.length; i++){
        console.log(i)
        if(nums[i] === target && k === null) k = i
        else if(!(nums[i] <= target)) return k !== null ? [k, i - 1] : [-1,-1]
    }
    return [-1,-1]
};