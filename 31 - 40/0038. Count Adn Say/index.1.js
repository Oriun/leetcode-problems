/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    
    function say(str, n){
        if(!n) return str
        let sss = ''
        let count = 0, char;
        for(let i = 0; i <= str.length; i++)
            if(char && char === str[i]){
                count++
            }else if(!char){
                count = 1
                char = str[i]
            }else{
                sss += count + '' + char
                count = 1
                char = str[i]
            }
        return say(sss, n - 1)
    }
    return say("1", n - 1)
};