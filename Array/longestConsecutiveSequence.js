// Longest Consecutive Sequence

function longestSuccessiveElements(a) {
  let n = a.length;
  if (n === 0) return 0;

  let longest = 1;
  let st = new Set();

  // put all the array elements into set
  for (let i = 0; i < n; i++) {
    st.add(a[i]);
  }

  // Find the longest sequence
  for (let it of st) {
    // if 'it' is a starting number
    if (!st.has(it - 1)) {
      // find consecutive numbers
      let cnt = 1;
      let x = it;
      while (st.has(x + 1)) {
        x = x + 1;
        cnt = cnt + 1;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

let a = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let ans = longestSuccessiveElements(a);
console.log(ans);

// node longestConsecutiveSequence.js
