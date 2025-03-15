// maximum product subarray

// Brute
function maxProductBrute(arr) {
  let n = arr.length;
  let maxProd = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let prod = 1;
      for (let k = i; k <= j; k++) {
        prod = prod * arr[k];
      }
      maxProd = Math.max(maxProd, prod);
    }
  }
  return maxProd;
}

// better
function maxProductBetter(arr) {
  let n = arr.length;
  let maxProd = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = i; j < n; j++) {
      prod = prod * arr[j];
      maxProd = Math.max(maxProd, prod);
    }
  }
  return maxProd;
}

// Optimal 1
function maxProduct1(arr) {
  let n = arr.length;
  let pref = 1;
  let suff = 1;
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (pref == 0) pref = 1;
    pref = pref * arr[i];
    maxi = Math.max(maxi, pref);
  }
  for (let i = n - 1; i >= 0; i--) {
    if (suff == 0) suff = 1;
    suff = suff * arr[i];
    maxi = Math.max(maxi, suff);
  }
  return maxi;
}

// Optimal 2
function maxProduct2(arr) {
  let n = arr.length;
  let pref = 1;
  let suff = 1;
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (pref == 0) pref = 1;
    if (suff == 0) suff = 1;
    pref = pref * arr[i];
    suff = suff * arr[n - i - 1];
    maxi = Math.max(maxi, Math.max(pref, suff));
  }
  return maxi;
}

let arr = [2, 3, -2, 4];
// let res = maxProductBrute(arr);
// let res = maxProductBetter(arr);
// let res = maxProduct1(arr);
let res = maxProduct2(arr);
console.log(res);
