/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums = [...new Set(nums)].sort((a, b) => a - b);

  let ans = 1,cur = 1;
  for (let i = 1; i < nums.length; i++) {
    nums[i] === nums[i - 1] + 1 ? cur++ : (cur = 1);

    ans = Math.max(ans, cur);
  }
  return ans;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
