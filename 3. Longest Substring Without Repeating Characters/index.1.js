/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    let max = 0, stack = []
    for (let i = 0; i < s.length; i++) {
        let j = stack.indexOf(s[i])
        if (j !== -1) {
            stack = stack.slice(j + 1)
        }
        stack.push(s[i])
        max = Math.max(max, stack.length)
    }
    return max
};