// Solve any patterns

{
  /* (1)
   * * * *
   * * * *
   * * * *
   * * * *
   */
}
let n = 5;
for (let i = 0; i < n; i++) {
  let row = ""; // initialize an empty string for each row
  for (let j = 0; j < n; j++) {
    row += "* "; // Append a "*" to the row
  }
  //   console.log(row);
}

{
  /* (2)
   *
   * *
   * * *
   * * * *
   * * * * *
   */
}
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

{
  /* (4)
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
  console.log(row);
}
