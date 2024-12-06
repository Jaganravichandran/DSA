// Rotate Matrix

function rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    //   row is matrix[i]
    matrix[i].reverse();
  }
  return matrix;
}

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const ans = rotate(matrix);

console.log(ans);

// node rotateMatrix.js
