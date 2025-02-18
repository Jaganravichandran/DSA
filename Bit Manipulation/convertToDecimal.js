// convert binary to decimal

function convert(str) {
  let n = str.length;
  let p2 = 1;
  let num = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] == "1") {
      num += p2;
    }
    p2 = p2 * 2;
  }
  return num;
}

let str = "1101";
let result = convert(str);
console.log(result);
