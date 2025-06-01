function longestIncreasingPath(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length, n = matrix[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(0));

  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];

  function dfs(r, c) {
    if (memo[r][c]) return memo[r][c];
    let maxLen = 1;
    for (let [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nc >= 0 && nr < m && nc < n &&
        matrix[nr][nc] > matrix[r][c]
      ) {
        maxLen = Math.max(maxLen, 1 + dfs(nr, nc));
      }
    }
    memo[r][c] = maxLen;
    return maxLen;
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }

  return result;
}

// Test
console.log(longestIncreasingPath([
  [9,9,4],
  [6,6,8],
  [2,1,1]
])); // Output: 4
