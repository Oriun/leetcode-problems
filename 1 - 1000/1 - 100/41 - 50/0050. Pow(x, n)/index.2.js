/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let j = x, k = 1, l = Math.abs(n);
    while(l){
        if(l%2) k *= j;
        j *= j;
        l = Math.floor(l/2);
    }
    return n < 0 ? 1/k : k;
};