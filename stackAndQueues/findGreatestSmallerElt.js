// find the greatest smaller element on left side

function greatestSmallerEltBrute(arr) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let maxSmaller = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        maxSmaller = Math.max(maxSmaller, arr[j]);
      }
    }
    ans.push(maxSmaller);
  }
  return ans;
}

// Better
function greatestSmallerEltBetter(arr) {
  let n = arr.length;
  let ans = [];
  let leftElements = [];
  for (let i = 0; i < n; i++) {
    let greatestSmaller = -1;
    for (let j = leftElements.length - 1; j >= 0; j--) {
      if (leftElements[j] < arr[i]) {
        greatestSmaller = leftElements[j];
        break;
      }
    }
    ans.push(greatestSmaller);

    let pos = 0;
    while (pos < leftElements.length && leftElements[pos] < arr[i]) {
      pos++;
    }
    leftElements.splice(pos, 0, arr[i]);
  }
  return ans;
}

let arr = [3, 5, 4, 2, 2, 5, 5, 4, 2, 5];
// let res = greatestSmallerEltBrute(arr);
let res = greatestSmallerEltBetter(arr);
console.log(res);
