// <---------x------------>

// Function to check Palindrome

// function toCheckPalindrome(n) {
//   let numStr = n.toString();
//   let revStr = "";
//   for (let i = numStr.length - 1; i >= 0; i--) {
//     revStr += numStr[i];
//   }
//   let revNum = parseInt(revStr);
//   if (n === revNum) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

function checkPalindrome(N) {
  return N === revNumber(N) ? true : false;
}

function revNumber(N) {
  let revNum = 0;
  while (N > 0) {
    let lastDigit = N % 10;
    N = Math.floor(N / 10);
    revNum = revNum * 10 + lastDigit;
  }
  return revNum;
}

let N = 10;
let result = checkPalindrome(N);
console.log(result);

// console.log(toCheckPalindrome(1232));

// <---------x------------>
