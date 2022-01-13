/** BASED ON SOLUTION - APPROACH 3 */
function longestPalindrome(s) {
    let n = s.length
    if (n < 2) return s

    let dp = new Array(n).fill(0).map(() => new Array(n).fill(false))

    let ans = ""

    ans += s[0]

    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && (j - i === 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                if (ans.length < (j - i + 1)) {
                    ans = s.substr(i, j - i + 1)
                }
            }
        }
    }
    return ans
}
