// subarray with k different intergers

// Brute
function subarraysWithKDistinctBrute(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let set = new Set();
    for (let j = i; j < n; j++) {
      set.add(arr[j]);
      if (set.size == k) {
        count++;
      }
    }
  }
  return count;
}

// Optimal
function subarraysWithKDistinct(arr, k) {
  let totalCount = atMostk(arr, k) - atMostk(arr, k - 1);
  return totalCount;
}

function atMostk(arr, k) {
  let n = arr.length;
  let left = 0,
    right = 0,
    count = 0;
  let map = new Map();
  while (right < n) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    while (map.size > k) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) == 0) map.delete(arr[left]);
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
}

let arr = [2, 1, 1, 1, 3, 4, 3, 2];
// let res = subarraysWithKDistinctBrute(arr, 2);
let res = subarraysWithKDistinct(arr, 3);
console.log(res);
