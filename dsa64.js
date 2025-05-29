function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax ? (leftMax = height[left]) : (result += leftMax - height[left]);
      left++;
    } else {
      height[right] >= rightMax ? (rightMax = height[right]) : (result += rightMax - height[right]);
      right--;
    }
  }

  return result;
}

// Test
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
