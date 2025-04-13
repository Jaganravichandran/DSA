// number of islands

// Brute
function numIslandsBrute(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let count = 0;
  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= n ||
      col >= m ||
      grid[row][col] == "W" ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = 1;

    for (let [dr, dc] of directions) {
      dfs(row + dr, col + dc);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == "L" && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

function numIslands(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  function bfs(row, col) {
    visited[row][col] = 1;

    let queue = [[row, col]];

    let index = 0;
    while (index < queue.length) {
      let [row, col] = queue[index++];

      // traverse in the neighbours
      for (let delrow = -1; delrow <= 1; delrow++) {
        for (let delcol = -1; delcol <= 1; delcol++) {
          let nRow = row + delrow;
          let nCol = col + delcol;

          if (
            nRow >= 0 &&
            nRow < n &&
            nCol >= 0 &&
            nCol < m &&
            grid[nRow][nCol] == "L" &&
            !visited[nRow][nCol]
          ) {
            visited[nRow][nCol] = 1;
            queue.push([nRow, nCol]);
          }
        }
      }
    }
  }

  let count = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (!visited[row][col] && grid[row][col] == "L") {
        count++;
        bfs(row, col);
      }
    }
  }
  return count;
}

let grid = [
  ["W", "W", "L", "L", "W", "L", "L", "L", "W", "W"],
  ["W", "L", "W", "L", "W", "L", "W", "L", "L", "W"],
  ["L", "W", "L", "L", "W", "L", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "L", "W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "L", "W", "L", "L", "W", "L"],
  ["L", "W", "L", "L", "W", "L", "W", "L", "L", "W"],
  ["L", "W", "L", "L", "L", "W", "L", "W", "L", "W"],
  ["L", "W", "L", "L", "W", "W", "W", "L", "W", "L"],
  ["W", "W", "W", "W", "L", "L", "W", "W", "W", "W"],
];

// let res = numIslandsBrute(grid);
let res = numIslands(grid);
console.log(res);
