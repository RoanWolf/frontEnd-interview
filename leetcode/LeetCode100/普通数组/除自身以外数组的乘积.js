/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let cnt = 0;

  for (let num of nums) num === 0 && cnt++;

  let res = nums.reduce((acc, num) => (num === 0 ? acc : acc * num), 1);

  if (cnt === 0) return nums.map((num) => res / num);
  else if (cnt === 1) return nums.map((num) => (num ? 0 : res));
  else return new Array(nums.length).fill(0);
};
