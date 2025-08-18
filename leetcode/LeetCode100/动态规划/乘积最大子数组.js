/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  const dpMin = new Array(n);
  const dpMax = new Array(n);
  let ans = nums[0];
  // nums[i] 结尾的子数组
  dpMax[0] = dpMin[0] = nums[0];

  for (let i = 1; i < n; ++i) {
    dpMax[i] = Math.max(
      nums[i],
      nums[i] * dpMin[i - 1],
      nums[i] * dpMax[i - 1]
    );
    dpMin[i] = Math.min(
      nums[i],
      nums[i] * dpMin[i - 1],
      nums[i] * dpMax[i - 1]
    );

    ans = Math.max(ans, dpMax[i]);
  }

  return ans;
};
