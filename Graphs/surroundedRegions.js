// surrounded regions / replace O's with X's

function sovle(board) {
  let n = board.length;
  let m = board[0].length;

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
        board[nRow][nCol] == "O" &&
        !visited[nRow][nCol]
      ) {
        dfs(nRow, nCol);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (!visited[0][i] && board[0][i] == "O") {
      dfs(0, i);
    }
    if (!visited[n - 1][i] && board[n - 1][i] == "O") {
      dfs(n - 1, i);
    }
  }

  for (let j = 0; j < n; j++) {
    if (!visited[j][0] && board[j][0] == "O") {
      dfs(j, 0);
    }
    if (!visited[j][m - 1] && board[j][m - 1] == "O") {
      dfs(j, m - 1);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] == 0 && board[i][j] == "O") {
        board[i][j] = "X";
      }
    }
  }
  return board;
}

let board = [
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
];

let res = sovle(board);
console.log(res);
