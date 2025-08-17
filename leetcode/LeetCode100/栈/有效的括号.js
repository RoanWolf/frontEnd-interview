/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) {
    return false;
  }

  const map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const stk = [];
  for (let c of s) {
    if (map.hasOwnProperty(c)) {
      stk.push(c);
    } else if (stk.length === 0 || map[stk.at(-1)] !== c) {
      return false;
    } else {
      stk.pop();
    }
  }
  return stk.length === 0;
};
