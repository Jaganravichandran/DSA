// number of enclaves

function numEnclavesBrute(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  function dfs(row, col) {
    visited[row][col] = 1;

    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        grid[nRow][nCol] == 1 &&
        !visited[nRow][nCol]
      ) {
        dfs(nRow, nCol);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (!visited[0][i] && grid[0][i] == 1) {
      dfs(0, i);
    }
    if (!visited[n - 1][i] && grid[n - 1][i] == 1) {
      dfs(n - 1, i);
    }
  }

  for (let j = 0; j < n; j++) {
    if (!visited[j][0] && grid[j][0] == 1) {
      dfs(j, 0);
    }
    if (!visited[j][m - 1] && grid[j][m - 1] == 1) {
      dfs(j, m - 1);
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        count++;
      }
    }
  }
  return count;
}

// Optimal
function numEnclaves(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  let queue = [];

  //   for (let i = 0; i < m; i++) {
  //     if (!visited[0][i] && grid[0][i] == 1) {
  //       visited[0][i] = 1;
  //       queue.push({ row: 0, col: i });
  //     }
  //     if (!visited[n - 1][i] && grid[n - 1][i] == 1) {
  //       visited[n - 1][i] = 1;
  //       queue.push({ row: n - 1, col: i });
  //     }
  //   }

  //   for (let j = 0; j < n; j++) {
  //     if (!visited[j][0] && grid[j][0] == 1) {
  //       visited[j][0] = 1;
  //       queue.push({ row: j, col: 0 });
  //     }
  //     if (!visited[j][m - 1] && grid[j][m - 1] == 1) {
  //       visited[j][m - 1] = 1;
  //       queue.push({ row: j, col: m - 1 });
  //     }
  //   }

  // method 2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
        if (grid[i][j] == 1) {
          queue.push({ row: i, col: j });
          visited[i][j] = 1;
        }
      }
    }
  }

  while (queue.length > 0) {
    let { row, col } = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        !visited[nRow][nCol] &&
        grid[nRow][nCol] == 1
      ) {
        visited[nRow][nCol] = 1;
        queue.push({ row: nRow, col: nCol });
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] == 0 && grid[i][j] == 1) {
        count++;
      }
    }
  }
  return count;
}

let grid = [
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

// let res = numEnclavesBrute(grid);
let res = numEnclaves(grid);
console.log(res);
