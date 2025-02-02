// Aggressive Cows => (minimum distance between any two cows) is maximum

// linear search => TC - O((max - min) x N) (Time limit exceeded)
function aggressiveCowsBrute(arr, cows) {
  arr.sort((a, b) => a - b);
  let min = arr[0]; // Math.min(...arr) if unsorted
  let max = ar[n - 1]; // Math.max(...arr) if unsorted
  let n = max - min;
  for (let i = 1; i <= n; i++) {
    if (canWePlace(arr, i, cows) == true) {
      continue;
    } else {
      return i - 1;
    }
  }
}

function canWePlace(arr, distance, cows) {
  let countCows = 1;
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= distance) {
      countCows++;
      last = arr[i];
    }
    if (countCows >= cows) {
      return true;
    }
  }
  return false;
}

function aggressiveCowsOptimal(arr, cows) {
  if (cows > arr.length) return -1; // Edge case: Not enough space
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let min = arr[0];
  let max = arr[n - 1];
  let low = 1;
  let high = max - min;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canWePlace(arr, mid, cows) == true) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

let arr = [0, 3, 4, 7, 10];
// let result = aggressiveCowsBrute(arr, 4);
let result = aggressiveCowsOptimal(arr, 4);
console.log(result);
