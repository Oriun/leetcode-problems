/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let p = ''
    if(x < 0) p = '-'
    p = parseInt(p + Math.abs(x).toString().split('').reverse().join(''))
    return (p > (-2)**31 && p < 2**31 -1) ? p : 0
};