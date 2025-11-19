/**
 * @param {number[][]} lrs
 * @return {number}
 */
var intersectionSizeTwo = function (lrs) {
  let ans = 0;
  lrs.sort((a, b) => a[1] - b[1] || b[0] - a[0]);

  let a = -1;
  let b = -1;
  lrs.forEach(([l, r]) => {
    if (l > b) {
      a = r - 1;
      b = r;
      ans += 2;
    } else if (l > a) {
      a = b;
      b = r;
      ans++;
    }
  });

  return ans;
};
