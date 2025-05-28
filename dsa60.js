function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i >= word.length && s.slice(i - word.length, i) === word) {
        dp[i] = dp[i] || dp[i - word.length];
      }
    }
  }

  return dp[s.length];
}

// Test
console.log(wordBreak("leetcode", ["leet", "code"])); // true
