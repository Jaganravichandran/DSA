// number of substrings containing all 3 characters

// Brute
function numberOfSubstringsBrute(s) {
  let n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let hashArr = new Array(3).fill(0);
    for (let j = i; j < n; j++) {
      let curr = s[j].charCodeAt();
      let a = "a".charCodeAt();
      hashArr[curr - a] = 1;
      if (hashArr[0] + hashArr[1] + hashArr[2] == 3) {
        count = count + 1;
      }
    }
  }
  return count;
}

// Brute Optimal
function numberOfSubstringsBruteOptimal(s) {
  let n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let hashArr = new Array(3).fill(0);
    for (let j = i; j < n; j++) {
      let curr = s[j].charCodeAt();
      let a = "a".charCodeAt();
      hashArr[curr - a] = 1;
      if (hashArr[0] + hashArr[1] + hashArr[2] == 3) {
        count = count + (n - j);
        break;
      }
    }
  }
  return count;
}

// Optimal
function numberOfSubstrings(s) {
  let n = s.length;
  let lastSeen = new Array(3).fill(-1);
  let count = 0;
  for (let i = 0; i < n; i++) {
    let curr = s[i].charCodeAt();
    let a = "a".charCodeAt();
    lastSeen[curr - a] = i;
    let min = Math.min(...lastSeen);
    count = count + (min + 1);
  }
  return count;
}

// Most Optimal
function numberOfSubstrings2(s) {
  let n = s.length;
  let a = 0,
    b = 0,
    c = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == "a") {
      a = i + 1;
    } else if (s[i] == "b") {
      b = i + 1;
    } else {
      c = i + 1;
    }
    count = count + Math.min(a, b, c);
  }
  return count;
}

let s = "bbacba";
// let res = numberOfSubstringsBrute(s);
// let res = numberOfSubstringsBruteOptimal(s);
// let res = numberOfSubstrings(s);
let res = numberOfSubstrings2(s);
console.log(res);
