/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let l = 0,
    r = matrix[0].length - 1,
    t = 0,
    b = matrix.length - 1;
    
  const res = [];

  while (true) {
    // 从左到右遍历
    for (let i = l; i <= r; i++) res.push(matrix[t][i]);
    if (++t > b) break;

    // 从上到下遍历
    for (let i = t; i <= b; i++) res.push(matrix[i][r]);
    if (l > --r) break;

    // 从右到左遍历
    for (let i = r; i >= l; i--) res.push(matrix[b][i]);
    if (t > --b) break;

    // 从下到上遍历
    for (let i = b; i >= t; i--) res.push(matrix[i][l]);
    if (++l > r) break;
  }

  return res;
};
