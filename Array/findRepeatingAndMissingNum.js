// find repeating and missing num in array

// Brute
function findTwoELementsBrute(arr) {
  let n = arr.length;
  let repeatedNum = -1;
  let missingNum = -1;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == i) {
        count++;
      }
    }
    if (count == 2) {
      repeatedNum = i;
    } else if (count == 0) {
      missingNum = i;
    }
    if (repeatedNum != -1 && missingNum != -1) {
      break;
    }
  }
  return [repeatedNum, missingNum];
}

// Better
function findTwoELementsBetter(arr) {
  let n = arr.length;
  let hashArr = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hashArr[arr[i]]++;
  }
  let repeatedNum = -1;
  let missingNum = -1;
  for (let i = 1; i <= n; i++) {
    if (hashArr[i] == 2) {
      repeatedNum = i;
    } else if (hashArr[i] == 0) {
      missingNum = i;
    }
    if (repeatedNum != -1 && missingNum != -1) {
      break;
    }
  }
  return [repeatedNum, missingNum];
}

// better 2
function findTwoELementsBetter2(arr) {
  let n = arr.length;
  let repeatedNum = -1;
  let hashSet = new Set();
  let actualSum = 0;
  for (let num of arr) {
    actualSum += num;
    if (hashSet.has(num)) {
      repeatedNum = num;
    } else {
      hashSet.add(num);
    }
  }

  let expectedSum = (n * (n + 1)) / 2;
  actualSum -= repeatedNum;
  let missingNum = expectedSum - actualSum;
  return [repeatedNum, missingNum];
}

// Optimal 1 (using Math)
function findTwoELements(arr) {
  let n = arr.length;
  // S - SN = x - y
  // S2 - S2N = x**2 - y**2

  let SN = (n * (n + 1)) / 2;
  let S2N = (n * (n + 1) * (2 * n + 1)) / 6;

  let S = 0;
  let S2 = 0;
  for (let i = 0; i < n; i++) {
    S += arr[i];
    S2 += arr[i] * arr[i];
  }

  let diff = S - SN; // x- y
  let diff2 = S2 - S2N; // x + y
  // Method 1
  diff2 = diff2 / diff;
  let x = (diff + diff2) / 2;
  let y = x - diff;

  // Method 2
  //   let sum = diff2 / diff;
  //   let x = (sum + diff) / 2;
  //   let y = (sum - diff) / 2;
  return [x, y];
}

// Optimal 2
function findTwoELements2(arr) {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
    xor = xor ^ (i + 1);
  }
  let bitNum = 0;
  while (1) {
    if ((xor & (1 << bitNum)) != 0) {
      break;
    }
    bitNum++;
  }
  let zero = 0;
  let one = 0;
  for (let i = 0; i < n; i++) {
    if ((arr[i] & (1 << bitNum)) != 0) {
      one = one ^ arr[i];
    } else {
      zero = zero ^ arr[i];
    }
  }
  for (let i = 1; i <= n; i++) {
    if ((i & (1 << bitNum)) != 0) {
      one = one ^ i;
    } else {
      zero = zero ^ i;
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == zero) {
      count++;
    }
  }
  if (count == 2) return [zero, one];
  return [one, zero];
}

let arr = [4, 3, 2, 6, 1, 1];
// let res = findTwoELementsBrute(arr);
// let res = findTwoELementsBetter(arr);
// let res = findTwoELementsBetter2(arr);
// let res = findTwoELements(arr);
let res = findTwoELements2(arr);
console.log(res);
