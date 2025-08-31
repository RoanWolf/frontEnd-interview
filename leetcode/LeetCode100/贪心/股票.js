/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
 
  let cur = prices[0];
  let ans = 0;
  for (let i = 1; i < n; i++) {
    cur = Math.min(cur, prices[i]);
    ans = Math.max(ans, prices[i] - cur);
  }

  return ans;
};
