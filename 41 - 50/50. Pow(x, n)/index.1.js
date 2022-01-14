/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if(!n) return 1
    let j = x, k = x, l = Math.abs(n);
    if(n < 0) j = k = 1/x
    for(let i = 1; i < l; i++) k *= j
    return k
};