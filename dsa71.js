function jobScheduling(startTime, endTime, profit) {
  const jobs = startTime.map((s, i) => [s, endTime[i], profit[i]]);
  jobs.sort((a, b) => a[1] - b[1]);

  const dp = [[0, 0]]; // [endTime, profit]

  for (let [s, e, p] of jobs) {
    let i = binarySearch(dp, s);
    const curr = dp[i][1] + p;
    if (curr > dp[dp.length - 1][1]) {
      dp.push([e, curr]);
    }
  }

  return dp[dp.length - 1][1];

  function binarySearch(dp, time) {
    let left = 0, right = dp.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (dp[mid][0] <= time) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
}

// Test
console.log(jobScheduling(
  [1,2,3,3],
  [3,4,5,6],
  [50,10,40,70]
)); // 120
