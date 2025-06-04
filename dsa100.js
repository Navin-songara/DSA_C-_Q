class NumArray {
  constructor(nums) {
    this.n = nums.length;
    this.tree = Array(2 * this.n).fill(0);
    for (let i = 0; i < this.n; i++) this.tree[i + this.n] = nums[i];
    for (let i = this.n - 1; i > 0; --i)
      this.tree[i] = this.tree[i << 1] + this.tree[i << 1 | 1];
  }

  update(index, val) {
    let i = index + this.n;
    this.tree[i] = val;
    while (i > 1) {
      i >>= 1;
      this.tree[i] = this.tree[i << 1] + this.tree[i << 1 | 1];
    }
  }

  sumRange(left, right) {
    let sum = 0;
    for (left += this.n, right += this.n + 1; left < right; left >>= 1, right >>= 1) {
      if (left & 1) sum += this.tree[left++];
      if (right & 1) sum += this.tree[--right];
    }
    return sum;
  }
}

// Test
const arr = new NumArray([1,3,5]);
console.log(arr.sumRange(0,2)); // Output: 9
arr.update(1,2);
console.log(arr.sumRange(0,2)); // Output: 8
