//  Assign cookies

function assignCookies(g, s) {
  let n = g.length;
  let m = s.length;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let left = 0,
    right = 0;
  while (left < m && right < n) {
    if (s[left] >= g[right]) {
      right++;
    }
    left++;
  }
  return right;
}

let g = [1, 5, 3, 3, 4];
let s = [4, 2, 1, 2, 1, 3];
let res = assignCookies(g, s);
console.log(res);
