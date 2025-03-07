// stock span

// brute
class StockSpannerBrute {
  constructor() {
    this.arr = [];
  }
  next(val) {
    this.arr.push(val);
    let count = 1;
    for (let i = this.arr.length - 2; i >= 0; i--) {
      if (this.arr[i] <= val) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
}

// Optimal
class StockSpanner {
  constructor() {
    this.stack = [];
    this.ind = -1;
  }
  next(val) {
    this.ind = this.ind + 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= val) {
      this.stack.pop();
    }
    let ans =
      this.ind -
      (this.stack.length == 0 ? -1 : this.stack[this.stack.length - 1][1]);
    this.stack.push([val, this.ind]);
    return ans;
  }
}
