/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false
    if(x < 10) return true
    let g = 1;
    while(10**(g+1) <= x) g++
    for(let h = g; h > g/2; h--){
        let i = Math.floor((x / 10**h)%10),
            j = Math.floor((x / 10**(g - h))%10);
        if(i !== j) return false
    }
    return true
};