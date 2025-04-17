// number of distinct islands

function countDistinctIslands(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let uniqueIslands = new Set();

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  function dfs(row, col, baseRow, baseCol, coords) {
    if (
      row < 0 ||
      col < 0 ||
      row >= n ||
      col >= m ||
      grid[row][col] == 0 ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = 1;

    coords.push(`${row - baseRow}${col - baseCol}`);
    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];
      dfs(nRow, nCol, baseRow, baseCol, coords);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        let coords = [];
        dfs(i, j, i, j, coords);
        uniqueIslands.add(coords.join("|"));
      }
    }
  }
  return uniqueIslands.size;
}

// better
function countDistinctIslandsBetter(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let uniqueIslands = new Set();

  let directions = [
    ["u", [-1, 0]],
    ["r", [0, 1]],
    ["d", [1, 0]],
    ["l", [0, -1]],
  ];

  function dfs(row, col, path, dir) {
    if (
      row < 0 ||
      col < 0 ||
      row >= n ||
      col >= m ||
      grid[row][col] == 0 ||
      visited[row][col]
    ) {
      return path;
    }

    visited[row][col] = 1;
    path = path + dir;

    for (let [d, [dr, dc]] of directions) {
      let nRow = row + dr;
      let nCol = col + dc;
      path = dfs(nRow, nCol, path, d);
    }

    return path + "b";
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        let shape = dfs(i, j, "", "o"); // o as origin
        uniqueIslands.add(shape);
      }
    }
  }

  return uniqueIslands.size;
}

let grid = [
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1],
];

// let res = countDistinctIslands(grid);
let res = countDistinctIslandsBetter(grid);
console.log(res);
