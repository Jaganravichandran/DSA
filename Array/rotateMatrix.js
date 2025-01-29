// Rotate Matrix

function rotateBrute(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(new Array(m).fill(0));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans[j][n - i - 1] = matrix[i][j]; // clockwise direction
      // ans[n - j - 1][i] = matrix[i][j]; Anti-clock wise direction
    }
  }
  return ans;
}

function rotateOptimal(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    //   row is matrix[i]
    // reverse(matrix[i]);
    matrix[i].reverse();
  }
  return matrix;
}

function reverse(matrix) {
  let n = matrix.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let temp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = temp;
    i++;
    j--;
  }
  return matrix;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// let result = rotateBrute(matrix);
const result = rotateOptimal(matrix);

console.log(result);

// node rotateMatrix.js
