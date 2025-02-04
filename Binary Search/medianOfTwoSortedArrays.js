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

let arr1 = [1, 3]; // [1, 3, 4, 7, 10, 12]
let arr2 = [2]; // [2, 3, 6, 15]
// let result = findMedian(arr1, arr2);
let result = findMedianBetter(arr1, arr2);
console.log(result);
