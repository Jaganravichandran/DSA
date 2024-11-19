// <---------x------------>

// powers of number

function power(N, R) {
  R = BigInt(R);

  const mod = 1000000007n;
  let ans = 1n;
  let pow = BigInt(N);
  while (R > 0n) {
    if (R % 2n === 1n) {
      ans = (ans * pow) % mod;
    }
    pow = (pow * pow) % mod;

    R = R / 2n;
  }
  return ans.toString();
}
// <---------x------------>
