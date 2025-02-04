// Median of two sorted arrays of different sizes

// brute => merge sort

function findMedian(arr1, arr2) {
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
  let n3 = arr3.length;
  if (n3 % 2 == 1) {
    return arr3[Math.floor(n3 / 2)];
  }
  let median = (arr3[n3 / 2] + arr3[n3 / 2 - 1]) / 2.0;
  return median;
}

function findMedianBetter(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  let n = n1 + n2;
  let index2 = Math.floor(n / 2);
  let index1 = index2 - 1;
  let count = 0;
  let elt1 = -1,
    elt2 = -1;
  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      if (count == index1) elt1 = a[i];
      if (count == index2) elt2 = a[i];
      count++;
      i++;
    } else {
      if (count == index1) elt1 = b[j];
      if (count == index2) elt2 = b[j];
      count++;
      j++;
    }
  }
  while (i < n1) {
    if (count == index1) elt1 = a[i];
    if (count == index2) elt2 = a[i];
    count++;
    i++;
  }
  while (j < n2) {
    if (count == index1) elt1 = b[j];
    if (count == index2) elt2 = b[j];
    count++;
    j++;
  }
  if (n % 2 == 1) {
    return elt2;
  }
  return (elt1 + elt2) / 2.0;
}

function findMedianOptimal(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  let n = n1 + n2;
  // if n1 is bigger than n2 then again call the function and swap the arrays => (b,a)
  if (n1 > n2) return findMedianOptimal(b, a);
  let low = 0;
  let high = n1;
  let left = Math.floor((n1 + n2 + 1) / 2);
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
      if (n % 2 == 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
}

let arr1 = [2, 4, 6]; // [1, 3]
let arr2 = [1, 3]; // [2]
// let result = findMedian(arr1, arr2);
// let result = findMedianBetter(arr1, arr2);
let result = findMedianOptimal(arr1, arr2);
console.log(result);
