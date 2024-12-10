// Search a 2D Matrix

function searchMatrix(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 12;

const ans = searchMatrix(matrix, target);
console.log(ans);

// node search2dMatrix.js
