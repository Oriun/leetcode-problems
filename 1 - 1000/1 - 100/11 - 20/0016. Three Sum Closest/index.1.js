/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let memory = nums.reduce((acc, cur) => {
        acc[cur] ||= 0
        acc[cur]++
        return acc
    }, {})
    let somme, difference = 2 * (10 ** 4);
    for (const m in memory) {
        memory[m]--
        for (const n in memory) {
            if (memory[n]) {
                memory[n]--
                for (const o in memory) {
                    if (memory[o]) {
                        let temp = (+m) + (+n) + (+o)
                        if (temp === target) return temp
                        let diff = Math.abs(target - temp)
                        if (diff < difference) {
                            difference = diff
                            somme = temp
                        }
                    }
                }
                memory[n]++
            }
        }
        memory[m]++
    }
    return somme
};
