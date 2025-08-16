/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  let dp = new Array(nums.length);

  let ans = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];
    ans = Math.max(ans, dp[i]);
  }

  return ans;
};

var maxSubArray = function (nums) {
  let ans = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    cur = Math.max(cur, 0) + nums[i];
    ans = Math.max(ans, cur);
  }

  return ans;
};