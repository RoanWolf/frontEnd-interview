/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 构造完全平方数数组
  const a = [];
  for (let i = 1; i <= 100; ++i) {
    a.push(i * i);
  }

  // dp[i][j] 表示使用前 i 个完全平方数构成 j 的最小数量
  const dp = Array.from({ length: 101 }, () => Array(n + 1).fill(Infinity));
  dp[0][0] = 0; // dp[0][0] 初始化为 0

  // 动态规划
  for (let i = 1; i <= 100; ++i) {
    for (let j = 0; j <= n; ++j) {
      // 不使用当前平方数
      dp[i][j] = dp[i - 1][j];
      // 如果可以使用当前平方数
      if (j >= a[i - 1] && dp[i][j - a[i - 1]] !== Infinity) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - a[i - 1]] + 1);
      }
    }
  }

  return dp[100][n];
};


