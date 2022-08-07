/**
 * @param {string} digits
 * @return {string[]}
 */
 const letters = ['abc','def', 'ghi','jkl','mno','pqrs','tuv','wxyz']
 var letterCombinations = function(digits) {
     let chunks = []
     for(const d of digits) chunks.push(letters[d - 2])
     if(chunks.length ===0) return []
     if(chunks.length === 1) return Array.from(chunks[0])
     let stack = [], indexes = new Array(chunks.length).fill(0)
     while(true){
         let str = '', n = 1
         for(let i = 0; i < indexes.length; i++){
             str += chunks[i][indexes[i]]
         }
         stack.push(str)
         for(let i = indexes.length - 1; i >= 0; i--){
             indexes[i] += n
             n = 0
             if(indexes[i] === chunks[i].length){
                 indexes[i] = 0
                 n = 1
             } else break
         }
         if(n) return stack
     }
 };