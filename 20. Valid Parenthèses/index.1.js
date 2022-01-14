const closing = {
    ")": "(",
    "}": "{",
    "]": "["
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let i = 0; i < s.length; i++){
        let c = closing[s[i]]
        if(stack[0] && stack[stack.length - 1] === c) stack.pop()
        else if (c) return false
        else stack.push(s[i])
    }
    return !stack.length
};