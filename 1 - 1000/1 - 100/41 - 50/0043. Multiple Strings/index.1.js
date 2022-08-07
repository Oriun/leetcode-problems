/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var add = function (toSum) {
    console.log(toSum)
    let res = ""
    let retenue = 0
    let run = true
    let n = 0
    while (true) {
        let sum = retenue
        run = false
        for (let i = 0; i < toSum.length; i++) {
            let index = toSum[i].length - n + i - 1
            if (index >= 0 && index < toSum[i].length) {
                sum += +toSum[i][index]
                run = true
            }
        }
        if (!run) break
        retenue = 0
        n++
        if (sum >= 10) {
            retenue = Math.floor(sum / 10)
            sum %= 10
        } console.log()
        res = sum + res
    }
    if (retenue) {
        res = retenue + res
    }
    return res
}
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"

    let toSum = new Array(num2.length).fill('')
    let retenue = 0
    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            let product = +num2[i] * +(num1[j] || 0) + retenue
            retenue = 0
            if (product >= 10) {
                retenue = Math.floor(product / 10)
                product %= 10
            }
            toSum[num2.length - i - 1] = product + toSum[num2.length - i - 1]
        }
        if (retenue) toSum[num2.length - i - 1] = retenue + toSum[num2.length - i - 1]
        retenue = 0
    }
    if (toSum.length === 1) return toSum[0]

    return add(toSum)
};