/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    if(dividend === 0) return 0
    let o  = Math.abs(dividend), p = Math.abs(divisor), q = 0
    if(p > o) return 0
    if(p === o) q = 1
    else if(p === 1) q = o
    else{
        o -= p
        while(o >= 0){
            q++
            o -= p
        }
    }
    if(dividend < 0 ^ divisor < 0) q = 0 - q
    return Math.max((-2)**31, Math.min(2**31 -1, q))
};