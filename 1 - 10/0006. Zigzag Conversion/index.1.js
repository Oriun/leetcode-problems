/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let cycle = numRows * 2 - 2 || 1
    let rows = new Array(numRows).fill("")
    for(let i = 0; i < s.length; i++) {
        let n = i % cycle
        if(n < numRows) rows[n] += s[i]
        else rows[2 * (numRows - 1) - n] += s[i]
    }
    return rows.join('')
};