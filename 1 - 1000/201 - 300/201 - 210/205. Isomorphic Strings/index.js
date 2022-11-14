/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const tmpS = {};
  const tmpT = {};
  for (let i = 0; i < s.length; i++) {
    tmpS[s[i]] ??= t[i];
    tmpT[t[i]] ??= s[i];
    if (tmpS[s[i]] !== t[i] || tmpT[t[i]] !== s[i]) return false;
  }
  return true;
};
