function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove elements out of this window
    if (deque.length && deque[0] === i - k) deque.shift();

    // Remove smaller values from the end
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add max to result
    if (i >= k - 1) result.push(nums[deque[0]]);
  }

  return result;
}

// Test
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
