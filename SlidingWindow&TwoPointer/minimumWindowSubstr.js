// minimum window substring

// Brute
function minWindowBrute(s, t) {
  let n = s.length;
  let m = t.length;
  let minLen = Number.MAX_SAFE_INTEGER,
    sIndex = -1;
  for (let i = 0; i < n; i++) {
    let hash = new Array(256).fill(0);
    let count = 0;
    for (let j = 0; j < m; j++) {
      let char = t[j].charCodeAt();
      hash[char]++;
    }
    for (let j = i; j < n; j++) {
      let curr = s[j].charCodeAt();
      if (hash[curr] > 0) {
        count = count + 1;
      }
      hash[curr]--;
      if (count == m) {
        let len = j - i + 1;
        if (len < minLen) {
          minLen = len;
          sIndex = i;
          break;
        }
      }
    }
  }
  result = s.substring(sIndex, sIndex + minLen);
  return sIndex == -1 ? "" : result;
}

// Optimal
function minWindow(s, t) {
  let n = s.length;
  let m = t.length;
  let left = 0,
    right = 0,
    count = 0,
    minLen = Number.MAX_SAFE_INTEGER,
    sIndex = -1;
  let hash = new Array(256).fill(0);
  for (let i = 0; i < m; i++) {
    let char = t[i].charCodeAt();
    hash[char]++;
  }
  while (right < n) {
    let curr = s[right].charCodeAt();
    if (hash[curr] > 0) {
      count = count + 1;
    }
    hash[curr]--;
    while (count == m) {
      let len = right - left + 1;
      if (len < minLen) {
        minLen = len;
        sIndex = left;
      }
      let char = s[left].charCodeAt();
      hash[char]++;
      if (hash[char] > 0) {
        count = count - 1;
      }
      left++;
    }
    right++;
  }
  let result = s.substring(sIndex, sIndex + minLen);
  return sIndex == -1 ? "" : result;
}

let s = "ddaaabbca";
let t = "abc";
// let res = minWindowBrute(s, t);
let res = minWindow(s, t);
console.log(res);
