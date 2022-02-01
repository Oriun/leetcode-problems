/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let k = 0, l = nums.length - 1, m = 0;
    if(nums[k] > target || nums[l] < target) return [-1,-1]
    
    while((l-k) > 1){
        m = Math.floor((l+k) * .5)
        if(nums[m] > target) l = m
        else if(nums[m] < target) k = m
        else{
            while(nums[m - 1] === target) m--
            k = l = m
        }
    }
    if(nums[k] !== target && nums[l] !== target) return [-1,-1]
    else if (nums[k] === target) l = k
    else k = l
    
    while(nums[l+1] === target) l++
    return [k,l]
};