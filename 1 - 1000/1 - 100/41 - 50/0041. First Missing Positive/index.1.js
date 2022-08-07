/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    var integer = 1, memory = {}, c = true
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < integer) continue
        if (c && memory.hasOwnProperty(integer))
            while (memory.hasOwnProperty(integer)) delete memory[integer++]
        c = false
        if (nums[i] === integer) c = (!!++integer)
        else memory[nums[i]] = true
    }
    while(memory.hasOwnProperty(integer)) integer++
    return integer
};