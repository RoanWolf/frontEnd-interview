/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  // dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度。
  const dp = new Array(n).fill(1);
  let ans = 0;
  for (let i = 1; i < n; ++i) {
    let maxVal = 0;
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        maxVal = Math.max(maxVal, dp[j]);
      }
    }
    dp[i] += maxVal;
    ans = Math.max(ans, dp[i]);
  }

  return ans;
};
