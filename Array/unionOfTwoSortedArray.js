// Union of Two Sorted Array

function union(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let set = new Set();
  for (let i = 0; i < n1; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < n2; i++) {
    set.add(arr2[i]);
  }
  // method 1
  //   let union = [...set];
  let unionArr = [];
  // method 2
  //   set.forEach((v) => union.push(v));
  // method 3
  for (let element of set) {
    unionArr.push(element);
  }
  return unionArr;
}

function unionOptimal(arr) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let unionArr = [];
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }
      i++;
    } else {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < n1) {
    if (unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
    }
    j++;
  }
  return unionArr;
}

let arr1 = [10, 15, 40]; // [1, 1, 2, 3, 4, 5]
let arr2 = [2, 3, 20]; // [2, 3, 4, 4, 5, 6]
// let result = union(arr1, arr2);
let result = unionOptimal(arr1, arr2);
console.log(result);
