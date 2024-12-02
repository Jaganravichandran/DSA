// Set Matrix Zeros

function setMatrixZeros(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const col = new Array(n).fill(0);
  const row = new Array(m).fill(0);

  //   Traverse the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  // if row[i] or col[j] is marked with 1
  // mark all (i,j) as 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const result = setMatrixZeros(matrix);

console.log(result);

// node setMatrixZeros.js
