/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0, j = 0
    while((j+i) < nums.length){
        if(nums[j + i] !== val){
            nums[i] = nums[j + i]
            i++
        }else j++
    }
    return i  
};