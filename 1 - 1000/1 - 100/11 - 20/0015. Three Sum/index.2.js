/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function parse(arr) {
    return arr.reduce((acc, cur, index)=> {
        acc[cur] ||= []
        acc[cur].push(index)
        return acc
    },{})    
}

var threeSum = function(nums) {
    let ram = {}, stack = []
    const indexes = parse(nums)
    for(let i = 0; i < nums.length - 2; i++)
        for(let j = i+1; j < nums.length - 1; j++){
            let l = 0 - nums[i] - nums[j]
            const lIndexes = indexes[l]
            if(!lIndexes) continue
            let k = 0
            while(lIndexes[k] === i || lIndexes[k] === j) k++
            if(lIndexes[k] === undefined) continue
            let [min, mid, max] = [nums[i], nums[j], l].sort()
            if(!ram.hasOwnProperty(min)){
                ram[min] = { [mid] : max }
                stack.push([min, mid, max])
            }else if(!ram[min].hasOwnProperty(mid)){
                ram[min][mid] = max
                stack.push([min, mid, max])
            }
        }
    return stack
};