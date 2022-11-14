/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
  if (!string.length || !pattern.length) {
    while (pattern[1] === "*") pattern = pattern.slice(2);
    return pattern.length === string.length;
  }

  if (pattern[1] === "*") {
    while (string[0] === pattern[0] || (pattern[0] === "." && string.length)) {
      if (isMatch(string, pattern.slice(2))) return true;
      string = string.slice(1);
    }
    return isMatch(string, pattern.slice(2));
  } else if (pattern[0] === "." || pattern[0] === string[0])
    return isMatch(string.slice(1), pattern.slice(pattern[1] === "*" ? 0 : 1));
  return false;
};

require("./tester")(isMatch);
