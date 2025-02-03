// Minimise Maximum distance between gas stations

// Brute => TLE (we need to optimise)
function findSmallestMaxDistBrute(arr, k) {
  let n = arr.length;
  let howMany = new Array(n - 1).fill(0);
  for (let gasStations = 1; gasStations <= k; gasStations++) {
    let maxVal = -1;
    let maxIndex = -1;
    for (let i = 0; i < n - 1; i++) {
      let diff = arr[i + 1] - arr[i];
      let sectionLen = diff / (howMany[i] + 1);
      if (maxVal < sectionLen) {
        maxVal = sectionLen;
        maxIndex = i;
      }
    }
    howMany[maxIndex]++;
  }
  let maxAns = -1;
  for (let i = 0; i < n - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    let sectionLen = diff / (howMany[i] + 1);
    maxAns = Math.max(maxAns, sectionLen);
  }
  return maxAns;
}

// Better (maxHeap approach)

// Optimal (Binary search)

function findSmallestMaxDistOptimal(arr, k) {
  let n = arr.length;
  let low = 0;
  let high = 0;
  for (let i = 0; i < n - 1; i++) {
    high = Math.max(high, arr[i + 1] - arr[i]);
  }
  let diff = 1e-6;
  while (high - low > diff) {
    let mid = (low + high) / 2.0;
    let count = numberOfGasStationsRequired(mid, arr);
    if (count > k) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
}

function numberOfGasStationsRequired(dist, arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 1; i < n; i++) {
    let numInBetween = Math.floor((arr[i] - arr[i - 1]) / dist);
    if (arr[i] - arr[i - 1] === dist * numInBetween) {
      count += numInBetween - 1;
    } else {
      count += numInBetween;
    }
  }
  return count;
}

let arr = [1, 2, 3, 4, 5];
// let result = findSmallestMaxDistBrute(arr, 5);
let result = findSmallestMaxDistOptimal(arr, 4);
console.log(result);
