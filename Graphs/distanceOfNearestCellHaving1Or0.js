// distance of nearest cell having 1 or 0

function nearest(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let distance = new Array(n);
  for (let i = 0; i < n; i++) {
    distance[i] = new Array(m);
  }

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        queue.push({ row: i, col: j, level: 0 });
        visited[i][j] = 1;
      }
    }
  }

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  while (queue.length > 0) {
    let { row, col, level } = queue.shift();
    distance[row][col] = level;

    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        !visited[nRow][nCol]
      ) {
        queue.push({ row: nRow, col: nCol, level: level + 1 });
        visited[nRow][nCol] = 1;
      }
    }
  }

  return distance;
}

// optimal
function nearestOptimal(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let distance = new Array(n);
  for (let i = 0; i < n; i++) {
    distance[i] = new Array(m).fill(-1);
  }

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        queue.push({ row: i, col: j, level: 0 });
        distance[i][j] = 0;
      }
    }
  }

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  let index = 0;
  while (index < queue.length) {
    let { row, col, level } = queue[index++];
    distance[row][col] = level;

    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        distance[nRow][nCol] == -1
      ) {
        queue.push({ row: nRow, col: nCol, level: level + 1 });
        distance[nRow][nCol] = 0;
      }
    }
  }

  return distance;
}

let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 0, 1],
];

// let res = nearest(grid);
let res = nearestOptimal(grid);
console.log(res);
