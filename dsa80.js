function maxSumOfThreeSubarrays(nums, k) {
  const n = nums.length;
  const sum = Array(n+1).fill(0);

  for (let i = 0; i < n; i++) sum[i+1] = sum[i] + nums[i];

  const left = Array(n).fill(0);
  let best = 0;
  for (let i = k; i < n; i++) {
    if (sum[i+1] - sum[i+1-k] > sum[best+k] - sum[best]) best = i+1-k;
    left[i] = best;
  }

  const right = Array(n).fill(n-k);
  best = n-k;
  for (let i = n-k-1; i >= 0; i--) {
    if (sum[i+k] - sum[i] >= sum[best+k] - sum[best]) best = i;
    right[i] = best;
  }

  let maxTotal = 0, result = [];

  for (let mid = k; mid <= n - 2*k; mid++) {
    const l = left[mid-1], r = right[mid+k];
    const total = (sum[l+k] - sum[l]) + (sum[mid+k] - sum[mid]) + (sum[r+k] - sum[r]);
    if (total > maxTotal) {
      maxTotal = total;
      result = [l, mid, r];
    }
  }

  return result;
}

// Test
console.log(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1], 2)); // [0,3,5]
