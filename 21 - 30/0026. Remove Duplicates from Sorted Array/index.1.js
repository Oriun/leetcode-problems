/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0, j = 0
    while((j+i) < nums.length){
        if(nums[j + i] !== nums[i - 1]){
            nums[i] = nums[j + i]
            i++
        }else j++
    }
    return i
};