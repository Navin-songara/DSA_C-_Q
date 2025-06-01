function minWindow(s1, s2) {
  const m = s1.length, n = s2.length;
  let minLen = Infinity, startIdx = -1;

  for (let i = 0; i < m; i++) {
    if (s1[i] !== s2[0]) continue;
    let j = 0, k = i;
    while (k < m) {
      if (s1[k] === s2[j]) j++;
      if (j === n) break;
      k++;
    }
    if (j !== n) break;

    let end = k;
    j = n - 1;
    while (k >= i) {
      if (s1[k] === s2[j]) j--;
      if (j < 0) break;
      k--;
    }

    if (end - k < minLen) {
      minLen = end - k;
      startIdx = k + 1;
    }
  }

  return startIdx === -1 ? "" : s1.substring(startIdx, startIdx + minLen);
}

// Test
console.log(minWindow("abcdebdde", "bde")); // "bcde"
