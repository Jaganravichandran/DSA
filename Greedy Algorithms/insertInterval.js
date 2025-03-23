// Insert interval

function insertInterval(interval, newInterval) {
  let n = interval.length;
  let result = [];
  let i = 0;
  while (i < n && interval[i][1] < newInterval[0]) {
    result.push(interval[i]);
    i = i + 1;
  }

  while (i < n && interval[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], interval[i][0]);
    newInterval[1] = Math.max(newInterval[1], interval[i][1]);
    i = i + 1;
  }
  result.push(newInterval);
  while (i < n) {
    result.push(interval[i]);
    i = i + 1;
  }
  return result;
}

let interval = [
  [1, 3],
  [6, 9],
];

let newInterval = [2, 5];
let res = insertInterval(interval, newInterval);
console.log(res);
