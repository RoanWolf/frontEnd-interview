/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  function isVaild(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m;
  }
  function dfs(i, j) {  
    grid[i][j] = "0";
    for (let dir of dirs) {
      const ni = i + dir[0];
      const nj = j + dir[1];
      if (isVaild(ni, nj) && grid[ni][nj] === "1") {
        dfs(ni, nj);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j] === "1") {
        ans++;
        dfs(i, j);
      }
    }
  }
  return ans;
};
