/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  let n = s.length;
const MOD = 1e9 + 7;
  let a = 0;
  let b = Number(s[0]);

  let ans = 0;

  for (let i = 1; i < n; ++i) {
    a = s[i] === "1" ? b + 1 : 0;

    ans = (ans + a ) % MOD;

    b = a;
  }

  return ans;
};
