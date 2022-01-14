/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false
    if(x < 10) return true
    if(x%10 === 0) return false
    let g = x, h = 0;
    while(g !== 0){
        h = h * 10 + (g%10)
        g = Math.floor(g / 10)
    }
    return h === x
};