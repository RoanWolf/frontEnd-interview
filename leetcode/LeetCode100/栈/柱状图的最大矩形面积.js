/**
 * @param {number[]} h
 * @return {number}
 */
var largestRectangleArea = function (h) {
  // 很简单 找每一个h[i] 左边和右边第一个小 h[i] 的 index
  // 大压小 栈
  const n = h.length;
  const l = new Array(n).fill(-1);
  const r = new Array(n).fill(n);

  const stack = [];

  for (let i = 0; i < n; ++i) {
    while (stack.length > 0 && h[stack.at(-1)] >= h[i]) {
      let pop = stack.pop();
      r[pop] = i;
    }
    if (stack.length) {
      l[i] = stack.at(-1);
    }
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans = Math.max(ans, (r[i] - l[i] - 1) * h[i]);
  }
  return ans;
};
