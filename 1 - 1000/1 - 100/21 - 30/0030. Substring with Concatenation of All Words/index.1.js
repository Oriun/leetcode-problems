/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    const starters = words.map(w=>w[0]),
        length = words[0].length,
        span = length * words.length,
        stop = s.length - span +1;
    var indexes = [];
    
    for(let i = 0; i < stop; i++){
        if(!starters.includes(s[i])) continue
        let stock = [...words]
        
        for(let j = 0; j < words.length; j++){
            let k = i + j*length,
                substring = s.substr(k, length),
                inStockIndex = stock.findIndex(s=>s === substring)
            if(inStockIndex !== -1) stock.splice(inStockIndex,1)
        }
        if(stock.length === 0) indexes.push(i)
    }
    
    return indexes
};