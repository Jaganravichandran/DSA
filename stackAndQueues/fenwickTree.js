// Implement fenwick tree or Binary index tree

class FenwickTree {
  constructor(size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, val) {
    while (index <= this.size) {
      this.tree[index] += val;
      index += index & -index;
    }
  }

  prefixSum(index) {
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }

  rangeSum(l, r) {
    return this.prefixSum(r) - this.prefixSum(l - 1);
  }

  replace(index, newValue) {
    let diff = newValue - this.tree[index];
    this.update(index, diff);
  }
}

let arr = [2, 1, 1, 3, 2, 3];
let bit = new FenwickTree(arr.length);

for (let i = 0; i < arr.length; i++) {
  bit.update(i + 1, arr[i]);
}

// bit.replace(1, 3);
// console.log(bit.tree);

let res = bit.rangeSum(3, 6);
console.log(res);
