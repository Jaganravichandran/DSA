// find the kth element of two sorted array

// brute => using merge sort
function findKthElementBrute(arr1, arr2, k) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let arr3 = [];
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i++]);
    } else {
      arr3.push(arr2[j++]);
    }
  }
  while (i < n1) {
    arr3.push(arr1[i++]);
  }
  while (j < n2) {
    arr3.push(arr2[j++]);
  }
  return arr3[k - 1]; // 0-based indexing
}

// better
function findKthElement(a, b, k) {
  let n1 = a.length;
  let n2 = b.length;
  let n = n1 + n2;
  // if n1 is bigger than n2 then again call the function and swap the arrays => (b,a)
  if (n1 > n2) return findKthElement(b, a, k);
  let low = Math.max(0, k - n2);
  let high = Math.min(k, n1);
  let left = k;
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;

    // assigning initial values if doesn't exist
    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 < n1) r1 = a[mid1];
    if (mid2 < n2) r2 = b[mid2];
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1];
    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
}

let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];
// let res = findKthElementBrute(arr1, arr2, 5);
let res = findKthElement(arr1, arr2, 5);
console.log(res);
