// longest substring with almost k distinct characters

// Brute
function longestKsubstringBrute(s, k) {
  let n = s.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let map = new Map();
    for (let j = i; j < n; j++) {
      map.set(s[j], (map.get(s[j]) || 0) + 1);
      if (map.size <= k) {
        let len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

// Optimal
function longestKsubstringBetter(s, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let map = new Map();
  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) == 0) map.delete(s[left]);
      left++;
    }
    if (map.size <= k) {
      let len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

// Optimal
function longestKsubstring(s, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let map = new Map();
  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    if (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) == 0) map.delete(s[left]);
      left++;
    }
    if (map.size <= k) {
      let len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

let s = "aaabbccd";
// let res = longestKsubstringBrute(s, 2);
// let res = longestKsubstringBetter(s, 2);
let res = longestKsubstring(s, 2);
console.log(res);
