function countSmaller(nums) {
  const n = nums.length, result = Array(n).fill(0), indexes = Array(n);
  for (let i = 0; i < n; i++) indexes[i] = i;

  function mergeSort(left, right) {
    if (right - left <= 1) return;

    const mid = Math.floor((left + right) / 2);
    mergeSort(left, mid);
    mergeSort(mid, right);

    const temp = [];
    let i = left, j = mid, count = 0;

    while (i < mid && j < right) {
      if (nums[indexes[j]] < nums[indexes[i]]) {
        temp.push(indexes[j++]);
        count++;
      } else {
        result[indexes[i]] += count;
        temp.push(indexes[i++]);
      }
    }

    while (i < mid) {
      result[indexes[i]] += count;
      temp.push(indexes[i++]);
    }
    while (j < right) temp.push(indexes[j++]);

    for (let k = left; k < right; k++) {
      indexes[k] = temp[k - left];
    }
  }

  mergeSort(0, n);
  return result;
}

// Test
console.log(countSmaller([5,2,6,1])); // [2,1,1,0]
