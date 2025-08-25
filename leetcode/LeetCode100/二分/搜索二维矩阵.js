/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function(matrix, target) {
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


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let arr of matrix){
        if(arr.includes(target) ){
            return true;
        }
    }
  return false;
};