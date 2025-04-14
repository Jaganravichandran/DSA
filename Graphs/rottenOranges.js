// rotten oranges

function orangesRotting(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m);
  }

  let queue = []; // {{row, col}, time}

  let countFresh = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 2) {
        queue.push({ row: i, col: j, time: 0 });
        visited[i][j] = 1;
      }
      if (grid[i][j] == 1) countFresh++;
    }
  }

  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  let minTime = 0;
  let count = 0;
  while (queue.length > 0) {
    let orange = queue.shift();
    let row = orange.row;
    let col = orange.col;
    let time = orange.time;
    minTime = Math.max(minTime, time);

    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        visited[nRow][nCol] != 2 &&
        grid[nRow][nCol] == 1
      ) {
        visited[nRow][nCol] = 2;
        queue.push({ row: nRow, col: nCol, time: time + 1 });
        count++;
      }
    }
  }

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < m; j++) {
  //       if (visited[i][j] != 2 && grid[i][j] == 1) {
  //         return -1;
  //       }
  //     }
  //   }

  if (count != countFresh) return -1;
  return minTime;
}

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

let res = orangesRotting(grid);
console.log(res);
