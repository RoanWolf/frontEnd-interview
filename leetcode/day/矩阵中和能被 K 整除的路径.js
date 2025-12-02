/**
 * @param {number[][]} g
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function (g, k) {
  const MOD = 1e9 + 7;
  const m = g.length;
  const n = g[0].length;
  const dp = Array.from(
    {
      length: m,
    },
    () => new Array(n).fill(0)
  );

  // console.log(dp)
  // k就50 把余数当成一维 dp[m-1][n-1][0] 就是ans
  dp[0][0] = g[0][0] % k;
};

numberOfPaths([
  [7, 3, 4, 9],
  [2, 3, 6, 2],
  [2, 3, 7, 0],
]);
