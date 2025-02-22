// count prime in a range from L to R

// Q1 => L = 3 R = 10 -> 3(3,5,7)
// Q1 => L = 8 R = 20 -> 4(11,13,17,19)
// Q1 => L = 1 R = 5 -> 3(2,3,5)

// L <= R

function countPrimeBrute(list) {
  let q = list.length;
  let ans = [];
  for (let i = 0; i < q; i++) {
    let l = list[i][0];
    let r = list[i][1];
    let count = 0;
    for (let j = l; j <= r; j++) {
      if (isPrime(j)) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
function isPrime(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

// better
function countPrimeBetter(list) {
  let q = list.length;
  let prime = getSieve(10 ** 6);
  let ans = [];
  for (let i = 0; i < q; i++) {
    let l = list[i][0];
    let r = list[i][1];
    let count = 0;

    if (r > 10 ** 6) r = 10 ** 6; // Prevent out-of-bounds errors

    for (let j = l; j <= r; j++) {
      if (prime[j] == 1) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
function getSieve(n) {
  let prime = new Array(n + 1).fill(1);
  prime[0] = prime[1] = 0; // 0 and 1 are not prime
  for (let i = 2; i * i <= n; i++) {
    if (prime[i] == 1) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }
  return prime;
}

// Optimal
function countPrime(list) {
  let q = list.length;
  let prime = getSieve(10 ** 6);
  let count = 0;
  for (let i = 2; i <= 10 ** 6; i++) {
    count = count + prime[i];
    prime[i] = count;
  }
  let ans = [];
  for (let i = 0; i < q; i++) {
    let l = list[i][0];
    let r = list[i][1];
    ans.push(prime[r] - prime[l - 1]);
  }
  return ans;
}

let q = [
  [3, 10],
  [8, 20],
  [23, 89],
];

// let res = countPrimeBrute(q);
// let res = countPrimeBetter(q);
let res = countPrime(q);
console.log(res);
