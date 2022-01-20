/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    return new RegExp(`^${p}$`).test(s)
};

/** ;p go to index.2.js **/