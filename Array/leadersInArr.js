// Leaders in an array

function findLeaders(arr) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader == true) ans.push(arr[i]);
  }

  return ans;
}

function findLeadersOptimal(arr) {
  let n = arr.length;
  let max = Number.MIN_SAFE_INTEGER;
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      ans.push(arr[i]);
    }
    max = Math.max(max, arr[i]);
  }
  // According to question
  //   let reverse = ans.reverse();
  //   let sort = ans.sort();
  return ans;
}

let arr = [61, 61, 17]; // [10, 22, 12, 3, 0, 6]
// let result = findLeaders(arr);
let result = findLeadersOptimal(arr);
console.log(result);
