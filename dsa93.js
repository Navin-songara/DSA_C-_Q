function numOfWays(nums) {
  const MOD = 1e9 + 7;
  const comb = Array.from({ length: 1001 }, () => Array(1001).fill(0));

  for (let i = 0; i < 1001; i++) {
    comb[i][0] = comb[i][i] = 1;
    for (let j = 1; j < i; j++) {
      comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  function dfs(arr) {
    if (arr.length < 3) return 1;
    const root = arr[0];
    const left = arr.filter(x => x < root);
    const right = arr.filter(x => x > root);
    const leftWays = dfs(left);
    const rightWays = dfs(right);
    return (comb[left.length + right.length][left.length] * leftWays % MOD) * rightWays % MOD;
  }

  return (dfs(nums) - 1 + MOD) % MOD;
}

// Test
console.log(numOfWays([2,1,3])); // Output: 1
