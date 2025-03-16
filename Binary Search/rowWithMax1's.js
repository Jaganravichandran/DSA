// find the row with maximum 1's

// Brute
function maxOnesBrute(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let ind = -1;
  let maxCount = -1;
  for (let i = 0; i < n; i++) {
    let countRow = 0;
    for (let j = 0; j < m; j++) {
      countRow += arr[i][j];
    }
    if (countRow > maxCount) {
      maxCount = countRow;
      ind = i;
    }
  }
  return ind;
}

// Optimal
function maxOnes(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let ind = -1;
  let maxCount = 0;
  for (let i = 0; i < n; i++) {
    let countOnes = m - lowerBound(arr[i], 1);
    if (countOnes > maxCount) {
      maxCount = countOnes;
      ind = i;
    }
  }
  return ind;
}

function lowerBound(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];
// let res = maxOnesBrute(arr);
let res = maxOnes(arr);
console.log(res);
