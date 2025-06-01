function minCut(s) {
  const n = s.length;
  const dp = Array(n).fill(0);
  const isPal = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = 0; j <= i; j++) {
      if (s[j] === s[i] && (i - j < 2 || isPal[j + 1][i - 1])) {
        isPal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, dp[j - 1] + 1);
      }
    }
    dp[i] = min;
  }

  return dp[n - 1];
}

// Test
console.log(minCut("aab")); // Output: 1
