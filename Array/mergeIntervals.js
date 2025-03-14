// Merge overlapping intervals

// Brute
function mergeIntervalsBrute(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
}

// better
function mergeIntervalsBetter(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (ans.length == 0 || arr[i][0] > ans[ans.length - 1][1]) {
      ans.push(arr[i]);
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
    }
  }
  return ans;
}

function mergeIntervals(arr) {
  let n = arr.length;

  arr.sort((a, b) => a[0] - b[0]);

  let ans = [arr[0]];

  for (let i = 1; i < n; i++) {
    let last = ans[ans.length - 1];
    let curr = arr[i];

    if (curr[0] > last[1]) {
      ans.push(curr);
    } else {
      last[1] = Math.max(last[1], curr[1]);
    }
  }

  return ans;
}

const arr = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
];
// let ans = mergeIntervalsBrute(arr);
// let ans = mergeIntervalsBetter(arr);
let ans = mergeIntervals(arr);
console.log(ans);

// node mergeIntervals.js
