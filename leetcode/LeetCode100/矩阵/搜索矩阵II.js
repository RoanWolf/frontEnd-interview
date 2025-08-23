/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 1 <= n, m <= 300
 */
var searchMatrix = function (matrix, target) {
  let right = matrix[0].length - 1;
  let top = 0;
  while (right >= 0 && top < matrix.length) {
    if (matrix[top][right] === target) {
      return true;
    } else if (matrix[top][right] < target) {
      top++;
    } else {
      right--;
    }
  }
  return false;
};
