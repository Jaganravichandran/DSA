// find the peak element in 2D matrix

// Brute
function peakElementBrute(mat) {
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let current = mat[i][j];

      let up = i > 0 ? mat[i - 1][j] : -1;
      let down = i < n - 1 ? mat[i + 1][j] : -1;
      let left = j > 0 ? mat[i][j - 1] : -1;
      let right = j < m - 1 ? mat[i][j + 1] : -1;

      if (current > up && current > down && current > left && current > right) {
        return [i, j];
      }
    }
  }
  return null;
}

// Optimal
function peakElement(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let low = 0;
  let high = m - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = findMaxIndex(mat, n, mid);
    let left = mid - 1 > 0 ? mat[row][mid - 1] : -1;
    let right = mid + 1 < m ? mat[row][mid + 1] : -1;

    if (mat[row][mid] > left && mat[row][mid] > right) {
      return [row, mid];
    } else if (mat[row][mid] < right) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [-1, -1];
}

function findMaxIndex(mat, n, col) {
  let maxval = -1;
  let ind = -1;
  for (let i = 0; i < n; i++) {
    if (mat[i][col] > maxval) {
      maxval = mat[i][col];
      ind = i;
    }
  }
  return ind;
}

let mat = [
  [1, 4],
  [3, 2],
];

// let res = peakElementBrute(mat);
let res = peakElement(mat);
console.log(res);
