// median of row wise sorted matrix

function medianBrute(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let current = mat[i][j];
      arr.push(current);
    }
  }
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let median = Math.floor(len / 2);
  return arr[median];
}

function median(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let req = Math.floor((n * m) / 2); // median
  // method 1
  //   let low = findMin(mat, n, 0);
  //   let high = findMax(mat, n, m - 1);

  // method 2
  let low = Number.MAX_SAFE_INTEGER;
  let high = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    low = Math.min(low, mat[i][0]);
    high = Math.max(high, mat[i][m - 1]);
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let smallerEquals = countSmallerElts(mat, n, mid);
    if (smallerEquals <= req) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

function findMin(mat, n, col) {
  let minVal = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (mat[i][col] < minVal) {
      minVal = mat[i][col];
    }
  }
  return minVal;
}

function findMax(mat, n, col) {
  let maxVal = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (mat[i][col] > maxVal) {
      maxVal = mat[i][col];
    }
  }
  return maxVal;
}

function countSmallerElts(mat, n, x) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += upperBound(mat[i], x);
  }
  return count;
}
function upperBound(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let mat = [
  [1, 5, 7, 9, 11],
  [2, 3, 4, 5, 10],
  [9, 10, 12, 14, 16],
];

// let res = medianBrute(mat);
let res = median(mat);
console.log(res);
