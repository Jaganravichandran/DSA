// Rearrange array elements by sign

// // 1st variety
// function rearrangeArrBrute(arr) {
//   let n = arr.length;
//   let pos = [];
//   let neg = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] >= 0) {
//       pos.push(arr[i]);
//     } else {
//       neg.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     arr[2 * i] = pos[i];
//     arr[2 * i + 1] = neg[i];
//   }
//   return arr;
// }

// function rearrangeArrOptimal(arr) {
//   let n = arr.length;
//   let posIndex = 0;
//   let negIndex = 1;
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] >= 0) {
//       ans[posIndex] = arr[i];
//       posIndex += 2;
//     } else {
//       ans[negIndex] = arr[i];
//       negIndex += 2;
//     }
//   }
//   return ans;
// }

// 2nd variety
function rearrangeArrBrute(arr) {
  let n = arr.length;
  let pos = [];
  let neg = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = neg.length + 2;
    for (let i = neg.length; i < pos.length; i++) {
      arr[index] = pos[i];
      index++;
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = pos.length + 2;
    for (let i = pos.length; i < neg.length; i++) {
      arr[index] = neg[i];
      index++;
    }
  }
  return arr;
}
let arr = [-1, 2, -3, -4, -3, 1]; // [3, 1, -2, -5, 2, -4]
let result = rearrangeArrBrute(arr);
// let result = rearrangeArrOptimal(arr);
console.log(result);
