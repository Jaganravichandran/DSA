// Longest Consecutive Sequence

function lcsBrute(arr) {
  let n = arr.length;
  let longest = 1;
  for (let i = 0; i < n; i++) {
    let x = arr[i];
    let count = 1;
    while (linearSearch(arr, x + 1) == true) {
      x = x + 1;
      count = count + 1;
    }
    longest = count;
  }
  return longest;
}

function linearSearch(arr, num) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

function lcsBetter(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let longest = 1;
  let lastSmaller = -1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] - 1 == lastSmaller) {
      count += 1;
      lastSmaller = arr[i];
    } else if (arr[i] != lastSmaller) {
      count = 1;
      lastSmaller = arr[i];
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

function lcs(a) {
  let n = a.length;
  if (n === 0) return 0;

  let longest = 1;
  let st = new Set();

  // put all the array elements into set
  for (let i = 0; i < n; i++) {
    st.add(a[i]);
  }

  // Find the longest sequence
  for (let elt of st) {
    // if 'it' is a starting number
    if (!st.has(elt - 1)) {
      // find consecutive numbers
      let cnt = 1;
      let x = elt;
      while (st.has(x + 1)) {
        x = x + 1;
        cnt = cnt + 1;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

let arr = [102, 4, 100, 101, 3, 2, 1, 1];
// let result = lcsBrute(arr);
// let result = lcsBetter(arr);
let result = lcs(arr);
console.log(result);

// node longestConsecutiveSequence.js
