// Sudoku solver

function sudokuSolver(board) {
  let n = board.length;
  let m = board[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == ".") {
        for (
          let c = "1";
          c <= "9";
          c = String.fromCharCode(c.charCodeAt(0) + 1)
        ) {
          if (isValid(board, i, j, c)) {
            board[i][j] = c;
            if (sudokuSolver(board) == true) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == c) {
      return false;
    }
    if (board[row][i] == c) {
      return false;
    }
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + Math.floor(i % 3)
      ] == c
    ) {
      return false;
    }
  }
  return true;
}

function main() {
  let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];

  sudokuSolver(board);
  // board.forEach((row) => console.log(row.join(" ")));
  return board;
}

let result = main();
console.log(result);
