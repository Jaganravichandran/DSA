// <------x-----x----->

// Find Last Digit Of a^b for Large Numbers

function getLastDigit(a, b) {
  let x = parseInt(a.charAt(a.length - 1), 10);
  let val = 0;

  if (b.length === 1 && b[0] === "0") {
    return 1;
  }

  for (let i = 0; i < b.length; i++) {
    val = (val * 10) % 4;
    val = (val + parseInt(b[i], 10)) % 4;
  }

  const result = Math.pow(x, val === 0 ? 4 : val);
  return parseInt(result % 10, 10);
}

console.log(getLastDigit(a, b));

// <------x-----x----->
