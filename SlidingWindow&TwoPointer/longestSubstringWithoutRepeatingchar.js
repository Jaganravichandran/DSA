// longest substring without repeating characters

// Brute
function longestSubstringLenBrute(s) {
  let n = s.length;
  let maxiLen = 0;
  for (let i = 0; i < n; i++) {
    let hashArr = new Array(256).fill(0);
    for (let j = i; j < n; j++) {
      let val = s[j].charCodeAt();
      if (hashArr[val] == 1) {
        break;
      }
      let len = j - i + 1;
      maxiLen = Math.max(maxiLen, len);
      hashArr[val] = 1;
    }
  }
  return maxiLen;
}

// Generate all substrings
function substring(s) {
  let n = s.length;
  let substring = [];
  for (let i = 0; i < n; i++) {
    let sub = "";
    for (let j = i; j < n; j++) {
      sub += s[j];
      substring.push(sub);
    }
  }
  return substring;
}

// Optimal 1
function longestSubstringLen1(s) {
  let n = s.length;
  let maxiLen = 0;
  let hashMap = new Map();
  let left = 0;
  let right = 0;
  while (right < n) {
    let curr = s[right];

    if (hashMap.has(curr)) {
      left = Math.max(left, hashMap.get(curr) + 1);
    }

    let len = right - left + 1;
    maxiLen = Math.max(maxiLen, len);
    hashMap.set(curr, right);
    right++;
  }
  return maxiLen;
}

// Optimal 2
function longestSubstringLen2(s) {
  let n = s.length;
  let maxiLen = 0;
  let hashArr = new Array(256).fill(-1);
  let left = 0;
  let right = 0;
  while (right < n) {
    let char = s[right].charCodeAt();
    left = Math.max(left, hashArr[char] + 1);

    let len = right - left + 1;
    maxiLen = Math.max(maxiLen, len);
    hashArr[char] = right;
    right++;
  }
  return maxiLen;
}

let s = "cadbzabcd";
// let res = longestSubstringLenBrute(s);
// let res = substring(s);
// let res = longestSubstringLen1(s);
let res = longestSubstringLen2(s);
console.log(res);
