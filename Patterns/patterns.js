// Solve any patterns

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

{
  /* (3)
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
   */
}
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  //   console.log(row);
}

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

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i + 1; j++) {
    row += j + " ";
  }
  //   console.log(row);
}
