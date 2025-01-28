// Set Matrix Zeros

function setMatrixZerosBrute(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        markRow(matrix, i);
        markCol(matrix, j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function markRow(matrix, i) {
  let m = matrix[0].length;
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = -1;
    }
  }
}
function markCol(matrix, j) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = -1;
    }
  }
}

function setMatrixZerosBetter(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const col = new Array(n).fill(0);
  const row = new Array(m).fill(0);

  //   Traverse the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  // if row[i] or col[j] is marked with 1
  // mark all (i,j) as 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j] == 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function setMatrixZerosOptimal(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let col0 = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        // mark the i-th row
        matrix[i][0] = 0;
        // mark the j-th row
        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] != 0) {
        if (matrix[0][j] == 0 || matrix[i][0] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }
  if (matrix[0][0] == 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col0 == 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// [
//   [1, 1, 1, 1],
//   [1, 0, 0, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
// ]

// let result = setMatrixZerosBrute(matrix);
// let result = setMatrixZerosBetter(matrix);
let result = setMatrixZerosOptimal(matrix);

console.log(result);

// node setMatrixZeros.js
