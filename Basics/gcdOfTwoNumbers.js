// <---------x------------>

// GCD of two numbers

// function gcd(a, b) {
//   while (b != 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// console.log(gcd(56, 30));

// Example:

// console.log(56 % 30);
// console.log(30 % 26);
// console.log(26 % 4);
// console.log(4 % 2);

function gcd(a, b) {
  // method 1:

  // let num = 1;
  // for (i = 1; i <= Math.min(a, b); i++) {
  //   if (a % i == 0 && b % i == 0) {
  //     num = i;
  //   }
  // }
  // return num;

  // method 2
  // let num = 1;
  // for (i = Math.min(a, b); i >= 1; i--) {
  //   if (a % i == 0 && b % i == 0) {
  //     num = i;
  //     break;
  //   }
  // }
  // return num;

  // euclidean algorithm

  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a == 0) {
    return b;
  } else {
    return a;
  }
}

let result = gcd(52, 10);
console.log(result);

// <---------x------------>
