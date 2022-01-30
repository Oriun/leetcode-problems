/**
 * @param {number} num
 * @return {string}
 */

 const symbols = [
    { unit: 'M', mid: '' , sub: ''  },
    { unit: 'C', mid: 'D', sub: 'M' },
    { unit: 'X', mid: 'L', sub: 'C' },
    { unit: 'I', mid: 'V', sub: 'X' }
]
var intToRoman = function(num) {
    let str = '', z = 1000, i = 0, k = num
    while(k){
        let u = Math.floor(k / z)
        const s = symbols[i]
        if(u === 9) str += s.unit + s.sub
        else if(u) {
            if (u >= 5) str += s.mid
            if (u === 4) str += s.unit + s.mid
            else for(let i = 0; i < u % 5; i++) str += s.unit
        }
        k -= u * z
        z /= 10
        i++
    }
    return str
};