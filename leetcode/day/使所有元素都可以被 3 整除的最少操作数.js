/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let ans = 0;
  nums.forEach((x) => {
    if (x % 3 !== 0) {
      ans++;
    }
  });

  return ans;
};
