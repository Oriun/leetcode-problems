/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length
    
    for(let level = 0; level <= (n /2) - 1; level++){
        let bound = n - level - 1,
            top = matrix[level].slice(level, bound+1),
            bottom = matrix[bound].slice(level, bound+1),
            left = matrix.slice(level, bound+1).map(m=>m[level]),
            right = matrix.slice(level, bound+1).map(m=>m[bound])
        
        left.forEach((r,i)=>{matrix[level][bound-i] = r})
        right.forEach((r,i)=>{matrix[bound][bound-i] = r})
        top.forEach((r,i)=>{matrix[i+level][bound] = r})
        bottom.forEach((r,i)=>{matrix[i+level][level] = r})
    }
    
};