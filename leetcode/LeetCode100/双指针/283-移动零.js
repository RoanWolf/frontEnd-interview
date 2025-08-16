/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
  let n = nums.length;

  let arr = nums.filter((item) => item !== 0);
  let a0 = new Array(n - arr.length).fill(0);

  // correct
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  for (let i = arr.length; i < n; i++) {
    nums[i] = 0;
  }

  // error: change previos address
  // nums = [...arr, ...a0];
};

var moveZeroes = function (nums) {
  //    [...val]  | 0000000
  // record real val by pos
  let pos = 0;
  for (let i = 0; i < nums.length; ++i)
    nums[i] !== 0 && (nums[pos++] = nums[i]);

  while (pos < nums.length) nums[pos++] = 0;
};
// 如果 0 要求在左边 ： 反向遍历