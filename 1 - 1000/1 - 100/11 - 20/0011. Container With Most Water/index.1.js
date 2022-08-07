/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length; i++){
        if(height[i] === 0) continue
        for(let j = i + 1; j < height.length; j++) {
            if(i === j || j === 0) continue
            max = Math.max(max, Math.min(height[i], height[j]) * Math.abs(j - i))
        }
    }
    return max
};

/** Time Exceeded Limit **/