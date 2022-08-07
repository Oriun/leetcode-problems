/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let ram = {}, stack = []
    for(let i = 0; i < nums.length - 2; i++)
        for(let j = i+1; j < nums.length - 1; j++){
            let l = 0 - nums[i] - nums[j]
            let [min, mid, max] = [nums[i], nums[j], l].sort()
            if(!ram.hasOwnProperty(min) || !ram[min].hasOwnProperty(mid))
                for(let k = j+1; k < nums.length; k++)
                    if(nums[k] === l) {
                        if(!ram.hasOwnProperty(min)){
                            ram[min] = { [mid] : max }
                            stack.push([min, mid, max])
                        }else if(!ram[min].hasOwnProperty(mid)){
                            ram[min][mid] = max
                            stack.push([min, mid, max])
                        }
                        break
                    }    
        }
    return stack
};