/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]];

  for (let i = 1; i < numRows; ++i) {
    const curLine = [1];
    for (let j = 1; j < i; ++j) {
      curLine.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    curLine.push(1);
    res.push(curLine);
  }

  return res;
};
