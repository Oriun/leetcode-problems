/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let n = null, q = 0;
    for(let i = 0; i < s.length; i++){
        let num = parseInt(s[i])
        if(s[i] === '-' && q === 0) {
            q = -1
        } else if(s[i] === '+' && q === 0) {
            q = 1
        } else if(Number.isNaN(num)){
            if(s[i] == ' ' && q === 0) continue
            else break
        }else {
            n = (n || 0) * 10 + num
            if(q === 0) q = 1
        }
    }
    if(!n) return 0
    return (n < 2**31) ?  (q || 1) * n : q === -1 ? (-2)**31 : 2**31 - 1
};