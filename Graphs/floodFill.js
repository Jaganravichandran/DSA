// flood fill algorithm

function floodFill(image, sr, sc, color) {
  let n = image.length;
  let m = image[0].length;

  //   let visited = new Array(n);
  //   for (let i = 0; i < n; i++) {
  //     visited[i] = new Array(m).fill(0);
  //   }

  let initialColor = image[sr][sc];
  let result = image;

  result[sr][sc] = color;

  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function bfs(row, col) {
    // visited[row][col] = 1;

    let queue = [[row, col]];

    while (queue.length > 0) {
      let [row, col] = queue.shift();

      for (let [dr, dc] of directions) {
        let nRow = row + dr;
        let nCol = col + dc;

        if (
          nRow >= 0 &&
          nCol >= 0 &&
          nRow < n &&
          nCol < m &&
          initialColor == image[nRow][nCol] &&
          //   !visited[nRow][nCol]
          result[nRow][nCol] != color
        ) {
          //   visited[nRow][nCol] = 1;
          result[nRow][nCol] = color;
          queue.push([nRow, nCol]);
        }
      }
    }
  }

  bfs(sr, sc);
  return result;
}

// better
function floodFillbetter(image, sr, sc, color) {
  let n = image.length;
  let m = image[0].length;

  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let initialColor = image[sr][sc];
  let result = image;

  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function dfs(row, col) {
    visited[row][col] = 1;
    result[row][col] = color;

    for (let [dr, dc] of directions) {
      let nRow = row + dr;
      let nCol = col + dc;

      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < n &&
        nCol < m &&
        image[nRow][nCol] == initialColor &&
        !visited[nRow][nCol]
      ) {
        dfs(nRow, nCol);
      }
    }
  }

  dfs(sr, sc);
  return result;
}

// Optimal
function floodFillOptimal(image, sr, sc, color) {
  let n = image.length;
  let m = image[0].length;
  let initialColor = image[sr][sc];
  let result = image;
  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  dfs(image, sr, sc, result, delRow, delCol, color, initialColor, n, m);
  return result;
}

function dfs(
  image,
  row,
  col,
  result,
  delRow,
  delCol,
  color,
  initialColor,
  n,
  m
) {
  result[row][col] = color;
  for (let i = 0; i < 4; i++) {
    let nRow = row + delRow[i];
    let nCol = col + delCol[i];

    if (
      nRow >= 0 &&
      nCol >= 0 &&
      nRow < n &&
      nCol < m &&
      image[nRow][nCol] == initialColor &&
      result[nRow][nCol] != color
    ) {
      dfs(image, nRow, nCol, result, delRow, delCol, color, initialColor, n, m);
    }
  }
}

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

let sr = 1;
let sc = 1;
let color = 2;
// let res = floodFill(image, sr, sc, color);
// let res = floodFillbetter(image, sr, sc, color);
let res = floodFillOptimal(image, sr, sc, color);
console.log(res);
