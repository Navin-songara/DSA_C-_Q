function isMatch(s, p) {
  const memo = {};

  function dp(i, j) {
    const key = `${i},${j}`;
    if (key in memo) return memo[key];
    if (j === p.length) return i === s.length;

    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

    let ans;
    if (j + 1 < p.length && p[j + 1] === '*') {
      ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
    } else {
      ans = firstMatch && dp(i + 1, j + 1);
    }

    memo[key] = ans;
    return ans;
  }

  return dp(0, 0);
}

// Test
console.log(isMatch("aab", "c*a*b")); // Output: true
