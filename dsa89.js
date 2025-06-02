function smallestRange(nums) {
  const minHeap = [], indices = Array(nums.length).fill(0);
  let max = -Infinity, start = 0, end = Infinity;

  for (let i = 0; i < nums.length; i++) {
    minHeap.push([nums[i][0], i]);
    max = Math.max(max, nums[i][0]);
  }

  minHeap.sort((a, b) => a[0] - b[0]);

  while (true) {
    const [min, i] = minHeap.shift();
    if (max - min < end - start) {
      start = min;
      end = max;
    }
    indices[i]++;
    if (indices[i] === nums[i].length) break;
    const next = nums[i][indices[i]];
    minHeap.push([next, i]);
    max = Math.max(max, next);
    minHeap.sort((a, b) => a[0] - b[0]);
  }

  return [start, end];
}

// Test
console.log(smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]));
// Output: [20,24]
