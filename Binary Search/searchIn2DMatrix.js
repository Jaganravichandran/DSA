// search in 2D Matrix

// Brute
function searchMatrixBrute(mat, target) {
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == target) {
        return true;
      }
    }
  }
  return false;
}

// better
function searchMatrixBetter(mat, target) {
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    if (mat[i][0] <= target && mat[i][m - 1] >= target) {
      return binarySearch(mat[i], target);
    }
  }
  return false;
}

function binarySearch(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

// for Optimal => check Array/search2dMatrix.js

let mat = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

// let res = searchMatrixBrute(mat, 3);
let res = searchMatrixBetter(mat, 3);
console.log(res);
