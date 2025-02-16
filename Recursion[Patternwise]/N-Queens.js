// N-Queens

function solveNQueensBrute(n) {
  let ans = [];
  let board = new Array(n).fill(".".repeat(n));
  solveBrute(0, board, ans, n);
  return ans;
}

function solveBrute(col, board, ans, n) {
  if (col == n) {
    ans.push([...board]);
    return;
  }
  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row] =
        board[row].substring(0, col) + "Q" + board[row].substring(col + 1);
      solveBrute(col + 1, board, ans, n);
      board[row] =
        board[row].substring(0, col) + "." + board[row].substring(col + 1);
    }
  }
}

function isSafe(row, col, board, n) {
  let duprow = row;
  let dupcol = col;
  // upper diagonal
  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") return false;
    row--;
    col--;
  }
  // middle diagonal
  col = dupcol;
  row = duprow;
  while (col >= 0) {
    if (board[row][col] == "Q") return false;
    col--;
  }
  // lower diagonal
  col = dupcol;
  row = duprow;
  while (row < n && col >= 0) {
    if (board[row][col] == "Q") return false;
    row++;
    col--;
  }
  return true;
}

function solveNQueensOptimal(n) {
  let ans = [];
  let leftRow = new Array(n).fill(0);
  let upperDiagonal = new Array(2 * n - 1).fill(0);
  let lowerDiagonal = new Array(2 * n - 1).fill(0);
  let board = new Array(n).fill(".".repeat(n));
  solveOptimal(0, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
  return ans;
}

function solveOptimal(
  col,
  board,
  ans,
  leftRow,
  upperDiagonal,
  lowerDiagonal,
  n
) {
  if (col == n) {
    ans.push([...board]);
    return;
  }
  for (let row = 0; row < n; row++) {
    if (
      leftRow[row] == 0 &&
      lowerDiagonal[row + col] == 0 &&
      upperDiagonal[n - 1 + col - row] == 0
    ) {
      board[row] =
        board[row].substring(0, col) + "Q" + board[row].substring(col + 1);
      leftRow[row] = 1;
      lowerDiagonal[row + col] = 1;
      upperDiagonal[n - 1 + col - row] = 1;
      solveOptimal(
        col + 1,
        board,
        ans,
        leftRow,
        upperDiagonal,
        lowerDiagonal,
        n
      );
      board[row] =
        board[row].substring(0, col) + "." + board[row].substring(col + 1);
      leftRow[row] = 0;
      lowerDiagonal[row + col] = 0;
      upperDiagonal[n - 1 + col - row] = 0;
    }
  }
}

let n = 4;
// let result = solveNQueensBrute(n);
let result = solveNQueensOptimal(n);
console.log(result);
