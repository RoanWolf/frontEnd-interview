/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const obj = [];
  for (let [k, v] of map) {
    obj.push({ val: k, cnt: v });
  }

  obj.sort((a, b) => b.cnt - a.cnt);

  let ans = [];
  for (let i = 0; i < k; ++i) {
    ans.push(obj[i].val);
  }

  return ans;
};
