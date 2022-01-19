function allIndexesOf(char, str, start = 0){
    let i = start, s = []
    while(true){
        let k = str.indexOf(char,i)
        if(k === -1) return s
        s.push(i = k+1)
    }
}
function isPalindrome(str){
  for(let i = 0; i < str.length / 2; i++)
    if(str[i] !== str[str.length - i - 1]) return false
  return true
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 4) return s[0] === s[s.length - 1]
    let tested = new Set(), palindrome = ""
    for(let i = 0; i < s.length; i++) {
        if(tested.has(s[i])) continue;
        let indexes = allIndexesOf(s[i], s)
        if(indexes.length === 1 && !palindrome.length) palindrome = s[i]
        else if(indexes.length){
            for(let j = 0; j < indexes.length; j++){
                const index = indexes[j]
                for (let k = j; k < indexes.length; k++){
                    const other = indexes[k]
                    if(index === other) continue;
                    let substring = s.substr(Math.min(index, other) - 1, Math.abs(index - other) + 1)
                    if(isPalindrome(substring) && palindrome.length < substring.length) palindrome = substring
                }
            }
        }
        tested.add(s[i])
    }
    return palindrome
};