/**
 * @param {number[]} nums
 * @return {object}
 */
function parse(nums) {
    return nums.reduce((acc, cur, index) => {
        if (acc.hasOwnProperty(cur)) {
            acc[cur].push(index)
        } else {
            acc[cur] = [index]
        }
        return acc
    }, {})
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const parsed = parse(nums)
    if (parsed.hasOwnProperty(target / 2) && parsed[target / 2].length >= 2) {
        return parsed[target / 2].slice(0, 2)
    }
    for (const key in parsed) {
        const searched = target - parseInt(key)
        if (parsed.hasOwnProperty(searched)) {
            return [parsed[key][0], parsed[searched][0]].sort()
        }
    }
};