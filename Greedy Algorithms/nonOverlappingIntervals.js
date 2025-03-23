// non-overlapping intervals

function eraseOverlapIntervals(arr) {
  let n = arr.length;
  arr.sort((a, b) => a[1] - b[1]);
  let lastEndTime = arr[0][1];
  //   let count = 1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    // if (arr[i][0] >= lastEndTime) {
    //   count++;
    //   lastEndTime = arr[i][1];
    // }
    if (arr[i][0] >= lastEndTime) {
      lastEndTime = arr[i][1];
    } else {
      count++;
    }
  }
  //   return n - count;
  return count;
}

let arr = [
  [0, 5],
  [3, 4],
  [1, 2],
  [5, 9],
  [5, 7],
  [7, 9],
];
let res = eraseOverlapIntervals(arr);
console.log(res);
