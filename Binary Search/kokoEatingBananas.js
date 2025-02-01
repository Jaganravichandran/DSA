// Koko eating bananas

// linear search TC => O(max(arr) x n)
function minEatingSpeed(arr, h) {
  let max = Math.max(...arr);
  for (let i = 1; i <= max; i++) {
    let reqTime = findTotalHours(arr, i);
    if (reqTime <= h) {
      return i;
    }
  }
}

function findTotalHours(arr, hour) {
  let n = arr.length;
  let totalHrs = 0;
  for (let i = 0; i < n; i++) {
    totalHrs += Math.ceil(arr[i] / hour);
  }
  return totalHrs;
}

// Binary search

function minEatingSpeedBs(arr, h) {
  let max = Math.max(...arr);
  let low = 1;
  let high = max;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalHrs = findTotalHours(arr, mid);
    if (totalHrs <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [3, 6, 7, 11];
// let result = minEatingSpeed(arr, 8);
let result = minEatingSpeedBs(arr, 8);
console.log(result);
