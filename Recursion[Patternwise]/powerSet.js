// Power set (print all subsequences)

// using binary digits
function powerSet(s) {
  let n = s.length;
  let ans = [];
  for (let num = 0; num < 1 << n; num++) {
    let sub = "";
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        sub += s[i];
      }
    }
    ans.push(sub);
  }
  return ans;
}

let string = "abc";
let result = powerSet(string);
console.log(result);
