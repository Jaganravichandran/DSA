// Insert interval

// Brute
function insertIntervalBrute(intervals, newInterval) {
  intervals.push(newInterval);

  intervals.sort((a, b) => a[0] - b[0]);

  let n = intervals.length;
  let result = [];
  let current = intervals[0];

  for (let i = 1; i < n; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      result.push(current);
      current = intervals[i];
    }
  }

  result.push(current);
  return result;
}

function insertInterval(intervals, newInterval) {
  let n = intervals.length;
  let result = [];
  let i = 0;
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i = i + 1;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i = i + 1;
  }
  result.push(newInterval);
  while (i < n) {
    result.push(intervals[i]);
    i = i + 1;
  }
  return result;
}

let intervals = [
  [1, 3],
  [6, 9],
];

let newInterval = [2, 5];
let res = insertIntervalBrute(intervals, newInterval);
// let res = insertInterval(intervals, newInterval);
console.log(res);
