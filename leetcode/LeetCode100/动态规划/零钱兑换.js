/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = coins.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(amount + 1).fill(Infinity)
  );
  dp[0][0] = 0;
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= amount; ++j) {
      dp[i][j] = dp[i - 1][j];
      if (j >= coins[i - 1] && dp[i][j - coins[i - 1]] !== Infinity) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
      }
    }
  }

  return dp[n][amount] === Infinity ? -1 : dp[n][amount];
};
