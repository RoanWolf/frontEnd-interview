/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag1 = function (nums) {
  let n = nums.length;
  if (n <= 2) {
    return 0;
  }
  let ans1 = 0;
  let ans2 = 0;

  // 固定偶数 是峰 遍历奇数
  for (let i = 1; i < n; i += 2) {
    let cur = nums[i];
    let l = nums[i - 1];
    let r = i + 1 < n ? nums[i + 1] : Infinity;

    let min = Math.min(l, r);
    ans1 += Math.max(cur - min + 1, 0);
  }

  // 固定奇数 是峰 遍历偶数
  for (let i = 0; i < n; i += 2) {
    let cur = nums[i];
    let l = i > 0 ? nums[i - 1] : Infinity;
    let r = i + 1 < n ? nums[i + 1] : Infinity;

    let min = Math.min(l, r);
    ans2 += Math.max(cur - min + 1, 0);
  }

  return Math.min(ans1, ans2);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  let n = nums.length;
  if (n <= 2) {
    return 0;
  }
  let ans1 = 0;
  let ans2 = 0;

  for (let i = 0; i < n; ++i) {
    let cur = nums[i];
    let l = i > 0 ? nums[i - 1] : Infinity;
    let r = i + 1 < n ? nums[i + 1] : Infinity;
    let min = Math.min(l, r);
    if (i % 2) {
      ans1 += Math.max(cur - min + 1, 0);
    } else {
      ans2 += Math.max(cur - min + 1, 0);
    }
  }

  return Math.min(ans1, ans2);
};
