// trapping rain water

function trapWaterBrute(arr) {
  let total = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let left = leftMax(arr, i);
    let right = rightMax(arr, i);
    let water = Math.min(left, right) - arr[i];
    if (water > 0) {
      total += water;
    }
  }
  return total;
}

function leftMax(arr, ind) {
  let maxLeft = 0;
  for (let i = 0; i <= ind; i++) {
    maxLeft = Math.max(maxLeft, arr[i]);
  }
  return maxLeft;
}

function rightMax(arr, ind) {
  let maxRight = 0;
  for (let i = ind; i < arr.length; i++) {
    maxRight = Math.max(maxRight, arr[i]);
  }
  return maxRight;
}

// better
function trapWaterBetter(arr) {
  let n = arr.length;
  let total = 0;
  // generating prefixMax
  // let prefixMax = new Array(n);
  // prefixMax[0] = arr[0];
  // for (let i = 1; i < n; i++) {
  //   prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);
  // }

  // generating suffixMax
  let suffixMax = new Array(n);
  suffixMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMax[i] = Math.max(suffixMax[i + 1], arr[i]);
  }
  // for (let i = 0; i < n; i++) {
  //   let leftMax = prefixMax[i];
  //   let rightMax = suffixMax[i];
  //   let water = Math.min(leftMax, rightMax) - arr[i];
  //   if (water > 0) {
  //     total += water;
  //   }
  // }
  let prefixMax = 0;
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, arr[i]);
    let water = Math.min(prefixMax, suffixMax[i]) - arr[i];
    if (water > 0) {
      total += water;
    }
  }
  return total;
}

// Optimal
function trapWater(arr) {
  let n = arr.length;
  let lMax,
    rMax,
    total = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (lMax > arr[left]) {
        total += lMax - arr[left];
      } else {
        lMax = arr[left];
      }
      left++;
    } else {
      if (rMax > arr[right]) {
        total += rMax - arr[right];
      } else {
        rMax = arr[right];
      }
      right--;
    }
  }
  return total;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let res = trapWaterBrute(arr);
// let res = trapWaterBetter(arr);
let res = trapWater(arr);
console.log(res);
