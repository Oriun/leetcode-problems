const values = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = 0
    for(let i = 0; i < s.length; i++)
        n = values[s[i+1]] > values[s[i]] ? n - values[s[i]] : n + values[s[i]]
    return n
};