/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    function rec(i,str, opened, closed) {
        if(i === opened && i === closed) return [str]
        
        if(opened === closed) return rec(i, str+"(", opened+1, closed)
        
        if(opened > closed){
            if(opened === i) return rec(i, str+")", opened, closed+1)
            return [
                rec(i, str+"(", opened+1, closed),
                rec(i, str+")", opened, closed+1)
            ]
        }
    }
    return rec(n, "", 0, 0).flat(Infinity)
};