/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.filter((num) => num > 0);
  const set = new Set(nums);

  let ans = 1;
  while (set.has(ans)) ans++;

  return ans;
};
