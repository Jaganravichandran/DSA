// maximum consecutive ones III

// Brute
function maxConsecutiveOnesBrute(arr, k) {
  let n = arr.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let zeros = 0;
    for (let j = i; j < n; j++) {
      if (arr[j] == 0) {
        zeros++;
      }
      if (zeros <= k) {
        let len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

//  Better
function maxConsecutiveOnesBetter(arr, k) {
  let left = 0;
  let right = 0;
  let zeros = 0;
  let maxLen = 0;
  while (right < arr.length) {
    if (arr[right] == 0) {
      zeros++;
    }
    while (zeros > k) {
      if (arr[left] == 0) {
        zeros = zeros - 1;
      }
      left++;
    }
    if (zeros <= k) {
      let len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

// Optimal
function maxConsecutiveOnes(arr, k) {
  let left = 0;
  let right = 0;
  let zeros = 0;
  let maxLen = 0;
  while (right < arr.length) {
    if (arr[right] == 0) {
      zeros++;
    }
    if (zeros > k) {
      if (arr[left] == 0) {
        zeros = zeros - 1;
      }
      left++;
    }
    if (zeros <= k) {
      let len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// let res = maxConsecutiveOnesBrute(arr, 2);
// let res = maxConsecutiveOnesBetter(arr, 2);
let res = maxConsecutiveOnes(arr, 2);
console.log(res);
