// longest repeating character replacement

// Brute
function charReplacementBrute(s, k) {
  let n = s.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let hash = new Array(26).fill(0);
    let maxFreq = 0;
    for (let j = i; j < n; j++) {
      let curr = s[j].charCodeAt(0);
      let A = "A".charCodeAt(0);
      hash[curr - A]++;
      maxFreq = Math.max(maxFreq, hash[curr - A]);
      let len = j - i + 1;
      let changes = len - maxFreq;
      if (changes <= k) {
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

// Better
function charReplacementBetter(s, k) {
  let n = s.length;
  let left = 0,
    right = 0;
  let maxLen = 0,
    maxFreq = 0;
  let hash = new Array(26).fill(0);
  while (right < n) {
    let curr = s[right].charCodeAt() - "A".charCodeAt();
    hash[curr]++;
    maxFreq = Math.max(maxFreq, hash[curr]);
    while (right - left + 1 - maxFreq > k) {
      let char = s[left].charCodeAt() - "A".charCodeAt();
      hash[char]--;
      maxFreq = 0;
      for (let i = 0; i < hash.length; i++) {
        maxFreq = Math.max(maxFreq, hash[i]);
      }
      left++;
    }
    if (right - left + 1 - maxFreq <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }
  return maxLen;
}

// Optimal
function charReplacement(s, k) {
  let n = s.length;
  let left = 0,
    right = 0;
  let maxLen = 0,
    maxFreq = 0;
  let hash = new Array(26).fill(0);
  while (right < n) {
    let curr = s[right].charCodeAt() - "A".charCodeAt();
    hash[curr]++;
    maxFreq = Math.max(maxFreq, hash[curr]);
    let len = right - left + 1;
    if (len - maxFreq > k) {
      let char = s[left].charCodeAt() - "A".charCodeAt();
      hash[char]--;
      left++;
    } else {
      len = right - left + 1;
      maxLen = Math.max(maxLen, len);
    }
    right++;
  }
  return maxLen;
}

let s = "AAABBCCD";
// let res = charReplacementBrute(s, 2);
// let res = charReplacementBetter(s, 2);
let res = charReplacement(s, 2);
console.log(res);
