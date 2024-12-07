// Merge Intervals

function mergeIntervals(intervals) {
  const n = intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);

  const ans = [intervals[0]];

  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1];
    const curr = intervals[i];

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr);
    }
  }

  return ans;
}

const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
const ans = mergeIntervals(arr);
console.log(ans);

// node mergeIntervals.js
