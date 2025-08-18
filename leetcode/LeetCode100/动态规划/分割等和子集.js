/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2) return false;

  sum = Math.floor(sum / 2);

  // 变成背包问题
  // 每个最多选一次 能否刚刚好达到sum
  // 01背包
  const dp = Array.from({ length: nums.length + 1 }, () =>
    Array(sum + 1).fill(false)
  );

  dp[0][0] = true;

  for(let i = 1;i <= nums.length;++i){
    for(let j = 0;j <= sum ; ++j){
        dp[i][j] = dp[i-1][j];
        if(j >= nums[i-1]){
            dp[i][j] = dp[i][j] || dp[i-1][j - nums[i-1]];
        }
    }
  }

  return dp[nums.length][sum];
};
