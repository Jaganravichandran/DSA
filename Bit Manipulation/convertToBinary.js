// convert decimal to binary

function convert(n) {
  let res = "";
  while (n != 0) {
    if (n % 2 == 1) {
      res += "1";
    } else {
      res += "0";
    }
    n = Math.floor(n / 2);
  }
  res = reverse(res);
  return res;
}

// reverse String
function reverse(str) {
  // method 1 => using in-built method
  let ans = str.split("").reverse().join("");

  // method 2 => using decrementing loop
  //   let n = str.length;
  //   let ans = "";
  //   for (let i = n - 1; i >= 0; i--) {
  //     ans += str[i];
  //   }

  // method 3 => using recursion
  //   if (str == "") {
  //     return "";
  //   }
  //   let ans = reverse(str.substr(1)) + str.charAt(0);
  return ans;
}

let n = 13;
let result = convert(n);
console.log(result);
