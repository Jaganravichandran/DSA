// Best Time to Buy and Sell Stock

function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    let cost = prices[i] - min;
    maxProfit = Math.max(maxProfit, cost);
    min = Math.min(min, prices[i]);
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];

const ans = maxProfit(prices);

console.log(ans);
