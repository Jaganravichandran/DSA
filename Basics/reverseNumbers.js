// <---------x------------>

// Reverse a numbers

function reverse_digit(n) {
  // String iteration
  let numStr = n.toString();
  let reversedStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
  }
  return parseInt(reversedStr);
}

console.log(reverse_digit(200));

// <---------x------------>
