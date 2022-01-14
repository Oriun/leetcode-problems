/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var prefix = "", i = 0, char = strs[0][0];
    while(char){
        for(const str of strs){
            if(str[i] !== char) return prefix
        }
        prefix += char
        char = strs[0][++i]
    }
     return prefix
 };