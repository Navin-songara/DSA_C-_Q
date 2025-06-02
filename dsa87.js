function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function dfs(start) {
    if (memo.has(start)) return memo.get(start);
    const res = [];

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (wordSet.has(word)) {
        if (end === s.length) {
          res.push(word);
        } else {
          const subs = dfs(end);
          for (let sub of subs) {
            res.push(word + " " + sub);
          }
        }
      }
    }

    memo.set(start, res);
    return res;
  }

  return dfs(0);
}

// Test
console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
// Output: ["cat sand dog","cats and dog"]
