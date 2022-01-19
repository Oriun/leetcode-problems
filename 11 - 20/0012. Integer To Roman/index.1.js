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
        switch(u){
            case 1:
            case 2:
            case 3:
                for(let j = 0; j < u;j++) str += s.unit
                break
            case 4:
                str += s.unit + s.mid
                break
            case 5:
                str += s.mid
                break
            case 6:
            case 7:
            case 8:
                str += s.mid
                for(let j = 0; j < u - 5; j++) str += s.unit
                break
            case 9:
                str += s.unit + s.sub
                break;
            default:
                break
        }
        k = k % z
        z /= 10
        i++
    }
    return str
};