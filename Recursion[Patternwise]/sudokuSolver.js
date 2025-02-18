// Sudoku solver

function sudokuSolverBrute(board) {
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
            if (sudokuSolverBrute(board) == true) {
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

function sudokuSolverOptimal(board) {
  let n = board.length;
  let m = board[0].length;

  // set => used to track used number
  let rowSet = Array.from({ length: n }, () => new Set());
  let colSet = Array.from({ length: n }, () => new Set());
  let boxSet = Array.from({ length: n }, () => new Set());

  // emptycell => used to store empty cell and fill set
  let emptyCells = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == ".") {
        emptyCells.push([i, j]);
      } else {
        let num = board[i][j];
        rowSet[i].add(num);
        colSet[j].add(num);
        boxSet[3 * Math.floor(i / 3) + Math.floor(j / 3)].add(num);
      }
    }
  }

  backTrack(0, board, rowSet, colSet, boxSet, emptyCells);
  return true;
}

function backTrack(index, board, rowSet, colSet, boxSet, emptyCells) {
  if (index === emptyCells.length) {
    return true;
  }
  let [row, col] = emptyCells[index];
  let boxIndex = 3 * Math.floor(row / 3) + Math.floor(col / 3);

  for (let num = 1; num <= 9; num++) {
    let charNum = num.toString();
    if (
      !rowSet[row].has(charNum) &&
      !colSet[col].has(charNum) &&
      !boxSet[boxIndex].has(charNum)
    ) {
      board[row][col] = charNum;
      rowSet[row].add(charNum);
      colSet[col].add(charNum);
      boxSet[boxIndex].add(charNum);

      if (backTrack(index + 1, board, rowSet, colSet, boxSet, emptyCells))
        return true;

      board[row][col] = ".";
      rowSet[row].delete(charNum);
      colSet[col].delete(charNum);
      boxSet[boxIndex].delete(charNum);
    }
  }
  return false;
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

  // sudokuSolverBrute(board);

  sudokuSolverOptimal(board);
  board.forEach((row) => console.log(row.join(" ")));
  // return board;
}

main();
