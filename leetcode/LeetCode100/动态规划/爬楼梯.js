/**
 * @param {number} n
 * @return {number}
 */

var climbStairs1 = function (n) {
  const dp = new Array(n + 1).fill(-1);
  return f(n, dp);
};

function f(n, dp) {
  if (n <= 2) return n;
  if (dp[n] !== -1) return dp[n];
  dp[n] = f(n - 1, dp) + f(n - 2, dp);
  return dp[n];
}


/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  const f = new Array(n + 1);
  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i <= n; ++i) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};