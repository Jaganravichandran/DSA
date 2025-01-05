// Solve any patterns

// (1)
//    * * * *
//    * * * *
//    * * * *
//    * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let row = ""; // initialize an empty string for each row
  for (let j = 0; j < n; j++) {
    row += "* "; // Append a "*" to the row
  }
  //   console.log(row);
}

// (2)
//    *
//    * *
//    * * *
//    * * * *
//    * * * * *

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  //   console.log(row);
}

// (3)
//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  //   console.log(row);
}

// (4)
//   1
//   2 2
//   3 3 3
//   4 4 4 4
//   5 5 5 5 5

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  //   console.log(row);
}

// (5)
//    * * * * *
//    * * * *
//    * * *
//    * *
//    *

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 0; j < n - i + 1; j++) {
    row += "* ";
  }
  //   console.log(row);
}

// (6)
//   1 2 3 4 5
//   1 2 3 4
//   1 2 3
//   1 2
//   1

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i + 1; j++) {
    row += j + " ";
  }
  //   console.log(row);
}

// (7)
//          *
//        * * *
//      * * * * *
//    * * * * * * *
//  * * * * * * * * *

for (let i = 0; i < n; i++) {
  let row = "";
  // space
  for (let j = 0; j < n - i - 1; j++) {
    row += "  ";
  }
  // star
  for (let j = 0; j < 2 * i + 1; j++) {
    row += "*" + " ";
  }
  // space
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }
  // console.log(row);
}

// (8)
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *
for (let i = 0; i < n; i++) {
  let row = "";
  // space
  for (let j = 0; j < i; j++) {
    row += "  ";
  }
  // star (2 x n -(2 x i + 1))
  for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
    row += "*" + " ";
  }
  // space
  for (let j = 0; j < i; j++) {
    row += " ";
  }
  // console.log(row);
}

// (9)
//          *
//        * * *
//      * * * * *
//    * * * * * * *
//  * * * * * * * * *
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *

// combine 8 and 9

// (10)
//    *
//    * *
//    * * *
//    * * * *
//    * * * * *
//    * * * *
//    * * *
//    * *
//    *

for (let i = 1; i <= 2 * n - 1; i++) {
  let row = "";
  let stars = i;
  if (i > n) {
    stars = 2 * n - i;
  }
  for (let j = 0; j < stars; j++) {
    row += "*";
  }
  // console.log(row);
}

// (11)
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let start = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  if (i % 2 == 0) {
    start = 1;
  } else {
    start = 0;
  }
  for (let j = 0; j <= i; j++) {
    row += start + " ";
    start = 1 - start;
  }
  // console.log(row);
}

// (12)
// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1
let space = 2 * (n - 1);
for (let i = 1; i <= n; i++) {
  let row = "";
  let start = 1;
  // numbers
  for (let j = 0; j < i; j++) {
    row += start + " ";
    start++;
  }
  // spaces
  for (let j = 1; j <= space; j++) {
    row += "  ";
  }
  // numbers
  for (let j = 0; j < i; j++) {
    start--;
    row += start + " ";
  }
  space -= 2;
  console.log(row);
}
