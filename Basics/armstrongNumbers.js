// <---------x------------>

// Armstrong Numbers

function armstrongNumber(n) {
  let k = n % 100;
  let k1 = n % 10;
  let n1 = Math.floor(n / 100);
  let k2 = Math.floor(k / 10);
  let j = n1 ** 3 + k2 ** 3 + k1 ** 3;
  if (j === n) {
    return true;
  }
  return false;
}

console.log(armstrongNumber(270));
console.log(270 % 100);
console.log(270 % 10);
console.log(Math.floor(270 / 100));
console.log(Math.floor(70 / 10));
console.log(2 ** 3 + 7 ** 3 + 0 ** 3);

// <---------x------------>
