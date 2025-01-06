// Solve any patterns

// (1)
//    * * * *
//    * * * *
//    * * * *
//    * * * *

let n = 5;
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

// let num = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  if (i % 2 == 0) {
    num = 1;
  } else {
    num = 0;
  }
  for (let j = 0; j <= i; j++) {
    row += num + " ";
    num = 1 - num;
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
  let num = 1;
  // numbers
  for (let j = 0; j < i; j++) {
    row += num + " ";
    num++;
  }
  // spaces
  for (let j = 1; j <= space; j++) {
    row += "  ";
  }
  // numbers
  for (let j = 0; j < i; j++) {
    num--;
    row += num + " ";
  }
  space -= 2;
  // console.log(row);
}

// (13)
//  1
//  2 3
//  4 5 6
//  7 8 9 10
//  11 12 13 14 15

var num = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  // console.log(row);
}

// (14)
// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    let alphabets = String.fromCharCode(65 + j);
    row += alphabets + " ";
  }
  // console.log(row);
}

// (15)
// A B C D E
// A B C D
// A B C
// A B
// A

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= n - i - 1; j++) {
    let alphabets = String.fromCharCode(65 + j);
    row += alphabets + " ";
  }
  // console.log(row);
}

// (16)
// A
// B B
// C C C
// D D D D
// E E E E E

for (let i = 0; i < n; i++) {
  let row = "";
  let alphabets = String.fromCharCode(65 + i);
  for (let j = 0; j <= i; j++) {
    row += alphabets + " ";
  }
  // console.log(row);
}

// (17)
//          A
//        A B A
//       A B C B A
//      A B C D C B A
//     A B C D E D C B A

for (let i = 0; i < n; i++) {
  let row = "";

  // space
  for (let j = 0; j <= n - i - 1; j++) {
    row += "  ";
  }

  // Characters
  let num = 0;
  let breakpoint = (2 * i + 1) / 2;
  for (let j = 1; j <= 2 * i + 1; j++) {
    let char = String.fromCharCode(65 + num);
    if (j <= breakpoint) {
      row += char + " ";
      num++;
    } else {
      row += char + " ";
      num--;
    }
  }

  // space
  for (let j = 0; j <= n - i - 1; j++) {
    row += " ";
  }
  // console.log(row);
}
