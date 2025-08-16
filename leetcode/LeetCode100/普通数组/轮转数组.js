/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(l, r, nums) {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}

var rotate = function (nums, k) {
  k %= nums.length;
  if (k === 0) return;

  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
};
