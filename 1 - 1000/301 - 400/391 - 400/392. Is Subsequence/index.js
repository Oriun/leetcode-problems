/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    while (k < t.length && t[k] !== s[i]) k++;
    if (k === t.length) return false;
    k++;
  }
  return true;
};
