/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      if (matrix[i][j] === 0) {
        for (let k = 0; k < m; k++) if (matrix[k][j] !== 0) matrix[k][j] = -1;
        for (let k = 0; k < n; k++) if (matrix[i][k] !== 0) matrix[i][k] = -1;
      }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
};
// 骗子解法