/**
 * @param {number[]} h
 * @return {number}
 */
var trap = function (h) {
  let n = h.length;
  if (n === 0) return 0;
  // calc every idx - rainValue as cur
  // cur = min(p[i] , s[i]) - h[i]
  // cur > 0 && ans += cur;
  let p = new Array(n).fill(0);
  let s = new Array(n).fill(0);
  let ans = 0;
  // how to get maxVal?
  p[0] = h[0];
  for (let i = 1; i < n; ++i) {
    p[i] = Math.max(h[i], p[i - 1]);
  }

  s[n - 1] = h[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    s[i] = Math.max(h[i], s[i + 1]);
  }

  for (let i = 0; i < n; ++i) {
    let cur = Math.min(s[i], p[i]) - h[i];
    cur > 0 && (ans += cur);
  }

  return ans;
};
