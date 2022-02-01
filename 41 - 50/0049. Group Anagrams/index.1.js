function isAnagram(str, str2) {
    if (str.length !== str2.length) return false
    let k = str2
    primary: for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < k.length; j++) {
            if (k[j] === str[i]) {
                k = k.slice(0, j) + k.slice(j + 1)
                continue primary
            }
        }
        return false
    }
    return true
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = [[strs.shift()]]

    primary: for (const str of strs) {
        for (let i = 0; i < result.length; i++) {
            if (isAnagram(result[i][0], str)) {
                result[i].push(str)
                continue primary
            }
        }
        result.push([str])
    }

    return result
};