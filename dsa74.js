// Memo
function isMatch(s, p) {
  const memo = {};

  function dp(i, j) {
    const key = `${i},${j}`;
    if (key in memo) return memo[key];

    if (j === p.length) return i === s.length;

    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

    let res;
    if (j + 1 < p.length && p[j + 1] === '*') {
      res = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
    } else {
      res = firstMatch && dp(i + 1, j + 1);
    }

    memo[key] = res;
    return res;
  }

  return dp(0, 0);
}

// Test
console.log(isMatch("mississippi", "mis*is*p*.")); // false
