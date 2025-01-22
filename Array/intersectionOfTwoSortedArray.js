// Intersection of Two sorted Array

function intersectionBrute(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  let ans = [];
  let visitedArr = new Array(Math.min(n1, n2)).fill(0);

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (a[i] == b[j] && visitedArr[j] == 0) {
        ans.push(a[i]);
        visitedArr[j] = 1;
        break;
      }
      if (b[j] > a[i]) break;
    }
  }
  return ans;
}

function intersectionOptimal(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  let ans = [];
  let i = 0,
    j = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    } else {
      ans.push(a[i]);
      i++;
      j++;
    }
  }
  return ans;
}

let a = [1, 2, 2, 3, 3, 4, 5, 6];
let b = [2, 3, 3, 5, 6, 6, 7];
// let result = intersectionBrute(a, b);
let result = intersectionOptimal(a, b);
console.log(result);
