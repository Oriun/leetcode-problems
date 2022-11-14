const data = [
  ["a", "ab*", true],
  ["aa", "a", false],
  ["aa", "a*", true],
  ["ab", ".*", true],
  ["aaa", "a*a", true],
  ["abcd", "d*", false],
  ["aaa", "ab*a", false],
  ["aab", "c*a*b", true],
  ["aaa", "ab*ac*a", true],
  ["aaa", "ab*a*c*a", true],
  ["aaa", "ab*a*c*a", true],
  ["ab", ".*c", false],
  ["mississippi", "mis*is*p*.", false],
  ["mississippi", "mis*is*ip*.", true],
  ["aabcbcbcaccbcaabc", ".*a*aa*.*b*.c*.*a*", true],
  ["aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c", false]
];

module.exports = function (isMatch) {
  let testNumber = 0;
  const _log = console.log;
  const fs = require("fs");
  fs.writeFileSync("log.txt", "");
  console.log = function (...args) {
    fs.appendFileSync(
      "log.txt",
      args.map((a) => JSON.stringify(a)).join(" ") + "\n"
    );
  };
  const log = function (...args) {
    _log(...args);
    console.log(...args);
  };
  for (const [string, pattern, result] of data) {
    testNumber++;
    log("Test " + testNumber + "/" + data.length);
    const testResult = isMatch(string, pattern);
    if (testResult !== result) {
      log(
        `Test ${testNumber} failed: isMatch("${string}", "${pattern}") should be ${result} but was ${testResult}`
      );
      return false;
    }
  }
  log("Tests passed");
  return true;
};
