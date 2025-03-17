// search in 2D matrix II

// Brute
function searchMatrixBrute(mat, target) {
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// Better
function searchMatrixBetter(mat, target) {
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    let ind = binarySearch(mat[i], target);
    if (ind != -1) {
      return [i, ind];
    }
  }
  return [-1, -1];
}

function binarySearch(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// Optimal
function searchMatrix(mat, target) {
  let n = mat.length;
  let m = mat[0].length;
  let row = 0;
  let col = m - 1;
  while (row < n && col >= 0) {
    if (mat[row][col] == target) {
      return [row, col];
    } else if (mat[row][col] < target) {
      row = row + 1;
    } else {
      col = col - 1;
    }
  }
  return [-1, -1];
}

let mat = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

// let res = searchMatrixBrute(mat, 14);
// let res = searchMatrixBetter(mat, 14);
let res = searchMatrix(mat, 14);
console.log(res);
