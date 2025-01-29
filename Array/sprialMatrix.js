// Sprial matrix

function sprialMatrix(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;
  let ans = [];
  while (top <= bottom && left <= right) {
    // right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    // bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    // left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }
    // top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let result = sprialMatrix(matrix);
console.log(result);
