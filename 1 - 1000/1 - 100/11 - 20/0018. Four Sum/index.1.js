function parse(arr) {
    return arr.reduce((acc, cur, index)=> {
        acc[cur] ||= []
        acc[cur].push(index)
        return acc
    },{})    
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ram = {}, stack = []
    const indexes = parse(nums)
    for(let i = 0; i < nums.length - 3; i++)
        for(let j = i+1; j < nums.length - 2; j++)
            for(let o = j+1; o < nums.length - 1; o++){
                let l = target - nums[i] - nums[j] - nums[o]
                const lIndexes = indexes[l]
                if(!lIndexes) continue
                let k = 0
                while(lIndexes[k] === i || lIndexes[k] === j || lIndexes[k] === o) k++
                if(lIndexes[k] === undefined) continue
                let [min, midinf, midsup, max] = [nums[i], nums[j], nums[o], l].sort()
                
                if(!ram.hasOwnProperty(min)){
                    ram[min] = { [midinf] : { [midsup] : max } }
                    stack.push([min, midinf, midsup, max])
                }else if(!ram[min].hasOwnProperty(midinf)){
                    ram[min][midinf] = { [midsup] : max }
                    stack.push([min, midinf, midsup, max])
                }else if(!ram[min][midinf].hasOwnProperty(midsup)){
                    ram[min][midinf][midsup] = max
                    stack.push([min, midinf, midsup, max])
                }
        }
    return stack
};