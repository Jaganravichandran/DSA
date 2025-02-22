// prime factorisation of a number(smallest prime factor)

// 12 => 2,2,3 -> (2 x 2 x 3 = 12)
// 16 = > 2,2,2,2 -> (2 x 2 x 2 x 2 = 16)
// 60 => 2,2,3,5 -> (2 x 2 x 3 x 5 = 50)

function printPrimeBrute(list) {
  let q = list.length;
  let ans = [];
  for (let i = 0; i < q; i++) {
    let factor = getPrimeFactorisation(list[i]);
    ans.push(factor);
  }
  return ans;
}

function getPrimeFactorisation(n) {
  let list = [];
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      while (n % i == 0) {
        list.push(i);
        n = Math.floor(n / i);
      }
    }
  }
  if (n > 1) list.push(n);
  return list;
}

// Optimal
function printPrime(list) {
  let q = list.length;
  let ans = [];
  let spf = smallestPrimeFactor(10 * 6);
  for (let i = 0; i < q; i++) {
    let x = list[i];
    let arr = [];
    while (x != 1) {
      arr.push(spf[x]);
      x = Math.floor(x / spf[x]);
    }
    ans.push(arr);
  }
  return ans;
}

function smallestPrimeFactor(n) {
  let spf = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    spf[i] = i;
  }
  for (let i = 2; i * i <= n; i++) {
    if (spf[i] == i) {
      for (let j = i * i; j <= n; j += i) {
        if (spf[j] == j) {
          spf[j] = i;
        }
      }
    }
  }
  return spf;
}

let q = [12, 16, 60];
// let res = printPrimeBrute(q);
let res = printPrime(q);
console.log(res);
