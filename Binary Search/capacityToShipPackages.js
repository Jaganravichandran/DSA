// Capacity to ship packages within D days

// linear search
function shipWithinDayBrute(weights, days) {
  let n = weights.length;
  let sum = 0;
  let max = Math.max(...weights);

  // calculating sum
  //   for (let i = 0; i < n; i++) {
  //     sum += weights[i];
  //   }
  sum = weights.reduce((acc, weight) => acc + weight, 0);

  for (let cap = max; cap <= sum; cap++) {
    daysRequired = findDays(weights, cap);
    if (daysRequired <= days) {
      return cap;
    }
  }
}

function findDays(weights, cap) {
  let n = weights.length;
  let days = 1;
  let load = 0;
  for (let i = 0; i < n; i++) {
    if (load + weights[i] > cap) {
      days = days + 1;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }
  return days;
}

function shipWithinDayOptimal(weights, days) {
  let sum = weights.reduce((acc, weight) => acc + weight, 0);
  let max = Math.max(...weights);
  let low = max;
  let high = sum;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let daysReq = findDays(weights, mid);
    if (daysReq <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = shipWithinDayBrute(weights, 5);
let result = shipWithinDayOptimal(weights, 5);
console.log(result);
