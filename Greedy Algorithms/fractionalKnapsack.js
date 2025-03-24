// Fractional Knapsack

function fractionalKnapsack(values, weights, capacity) {
  let n = values.length;

  let ratios = [];
  for (let i = 0; i < n; i++) {
    ratios.push({ ratio: values[i] / weights[i], index: i });
  }

  ratios.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let i = 0; i < n; i++) {
    let ind = ratios[i].index;
    if (weights[ind] <= remainingCapacity) {
      totalValue += values[ind];
      remainingCapacity -= weights[ind];
    } else {
      let fraction = values[ind] / weights[ind];
      totalValue += fraction * remainingCapacity;
      break;
    }
  }
  return parseFloat(totalValue.toFixed(6));
}

let values = [100, 60, 100, 200];
let weights = [20, 10, 50, 50];
let capacity = 50;

let res = fractionalKnapsack(values, weights, capacity);
console.log(res);
