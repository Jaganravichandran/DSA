// <---------x------------>

// Function to check Palindrome

function toCheckPalindrome(n) {
  let numStr = n.toString();
  let revStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    revStr += numStr[i];
  }
  let revNum = parseInt(revStr);
  if (n === revNum) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(toCheckPalindrome(1232));

// <---------x------------>
