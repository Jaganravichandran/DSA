//  count number of nice subarrays

// Brute
function numOfSubarraysBrute(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + (arr[j] % 2);
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
}

// better
function numOfSubarrays(arr, k) {
  let n = arr.length;
  let hash = new Array(n + 1).fill(0);
  hash[0] = 1;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + (arr[i] % 2);
    let remove = sum - k;
    if (remove >= 0) {
      count += hash[remove];
    }
    hash[sum]++;
  }
  return count;
}

// Optimal
function numOfSubarraysBetter(arr, k) {
  let totalCount = atMost(arr, k) - atMost(arr, k - 1);
  return totalCount;
}

function atMost(arr, k) {
  if (k < 0) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    count = 0;
  while (right < arr.length) {
    sum = sum + (arr[right] % 2);
    while (sum > k) {
      sum = sum - (arr[left] % 2);
      left++;
    }
    let len = right - left + 1;
    count = count + len;
    right++;
  }
  return count;
}

// Most optimal
function numOfSubarraysOptimal(arr, k) {
  let n = arr.length;
  let left = 0,
    right = 0,
    oddCount = 0,
    count = 0,
    ans = 0;
  while (right < n) {
    if (arr[right] % 2 == 1) {
      oddCount++;
      count = 0;
    }
    while (oddCount == k) {
      count++;
      if (arr[left] % 2 == 1) {
        oddCount--;
      }
      left++;
    }
    ans = ans + count;
    right++;
  }
  return ans;
}

let arr = [1, 1, 2, 1, 1];
// let res = numOfSubarraysBrute(arr, 3);
// let res = numOfSubarraysBetter(arr, 3);
// let res = numOfSubarrays(arr, 3);
let res = numOfSubarraysOptimal(arr, 3);
console.log(res);
