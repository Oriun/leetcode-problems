var runningSum = function(nums) {
    let sum = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        sum.push(sum[i-1] + nums[i])
    }
    return sum
}

var reverseRunningSum = function(total, nums) {
    let sum = [total]
    for(let i = 0; i < nums.length - 1; i++) {
        sum.push(sum[i] - nums[i])
    }
    return sum
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const ascending = runningSum(nums)
    const descending = reverseRunningSum(ascending[ascending.length - 1], nums)
    console.log(nums)
    console.log(ascending)
    console.log(descending)
    return nums.findIndex((_,i)=>ascending[i] === descending[i])
};