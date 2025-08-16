/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map(); // sum cnt
  map.set(0, 1);
  let sum = 0,
    cnt = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      cnt += map.get(sum - k);
    }

    map.set(sum, 1 + (map.get(sum) || 0));
  }
  return cnt;
};
