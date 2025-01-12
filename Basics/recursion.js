// Problems on Recursion

// Print name "N" times using recursion
function print1(i, n) {
  if (i > n) {
    return;
  }
  console.log("DSA");
  print(i + 1, n);
}
// print1(1,3)

// print from 1 to N
function print2(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  print(i + 1, n);
}
// print2(1,3)

// print from N to 1
function print3(i, n) {
  if (i < 1) {
    return;
  }
  console.log(i);
  print(i - 1, n);
}
// print3(3,3)

// print from 1 to N using Backtracking
function print4(i, n) {
  if (i < 1) {
    return;
  }
  print(i - 1, n);
  console.log(i);
}
// print4(3, 3);

// print from N to 1 using Backtracking

function print5(i, n) {
  if (i > n) {
    return;
  }
  print5(i + 1, n);
  console.log(i);
}
print5(1, 3);
