/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill().map(() => [0, 0]);

  // 0 no
  // 1 yes
  for (let i = 1; i <= n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i - 1];
  }

  return Math.max(dp[n][0], dp[n][1]);
};
