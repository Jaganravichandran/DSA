// Problems on Recursion

// Print name "N" times using recursion
// Parameter based => it directly uses the parameters i and n to control the recursion.
function print1(i, n, arr = []) {
  if (i > n) {
    return arr;
  }
  arr.push("DSA");
  return print1(i + 1, n, arr);
}

// functional based
function print1Func(n) {
  function helper(i, arr) {
    if (i > n) {
      return arr;
    }
    arr.push("DSA");
    return helper(i + 1, arr);
  }
  return helper(1, []);
}
// let ans1 = print1(1, 3);
let ans1 = print1Func(3);
console.log(ans1);

// print from 1 to N
function print2(i, n, arr = []) {
  if (i > n) {
    return arr;
  }
  arr.push(i);
  return print2(i + 1, n, arr);
}
let ans2 = print2(1, 3);
console.log(ans2);

// print from N to 1
function print3(i, n, arr = []) {
  if (i < 1) {
    return arr;
  }
  arr.push(i);
  return print3(i - 1, n, arr);
}
let ans3 = print3(3, 3);
console.log(ans3);

// print from 1 to N using Backtracking
function print4(i, n, arr = []) {
  if (i < 1) {
    return arr;
  }
  print4(i - 1, n, arr);
  arr.push(i);
  return arr;
}
let ans4 = print4(3, 3);
console.log(ans4);

// print from N to 1 using Backtracking
function print5(i, n, arr = []) {
  if (i > n) {
    return arr;
  }
  print5(i + 1, n, arr);
  arr.push(i);
  return arr;
}
let ans5 = print5(1, 3);
console.log(ans5);

// sum of first N numbers
// Parameter based
function sumOfNnums(i, sum) {
  if (i < 1) {
    return sum;
  }
  return sumOfNnums(i - 1, sum + i);
}

// functional based
function sumOfNnumsFunc(n) {
  if (n == 0) {
    return 0;
  }
  return n + sumOfNnumsFunc(n - 1);
}
// let ans6 = sumOfNnums(3, 0);
let ans6 = sumOfNnumsFunc(5);
console.log(ans6);
