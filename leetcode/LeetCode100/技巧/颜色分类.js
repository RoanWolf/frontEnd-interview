/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let num of nums) {
    if (num === 0) a++;
    else if (num === 1) b++;
    else c++;
  }

  for (let i = 0; i < a; ++i) nums[i] = 0;
  for (let i = a; i < a + b; ++i) nums[i] = 1;
  for (let i = a + b; i < a + b + c; ++i) nums[i] = 2;
};
