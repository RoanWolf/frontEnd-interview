/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let q = [];
  let cnt = 0;

  // 所有腐烂的橘子加入队列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        q.push([i, j]);
      } else if (grid[i][j] === 1) {
        cnt++;
      }
    }
  }

  if (cnt === 0) {
    return 0;
  }

  let ans = 0;

  while (q.length > 0) {
    const levelSize = q.length; 

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = q.shift();

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          cnt--;
          q.push([nr, nc]);
        }
      }
    }

    q.length && ans++;
  }

  return cnt === 0 ? ans : -1;
};
