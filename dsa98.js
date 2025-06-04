function minWindow(s, t) {
  if (!s || !t) return "";

  const map = {};
  for (let c of t) map[c] = (map[c] || 0) + 1;

  let start = 0, end = 0, minLen = Infinity, minStart = 0;
  let counter = t.length;

  while (end < s.length) {
    if (map[s[end]]-- > 0) counter--;
    end++;

    while (counter === 0) {
      if (end - start < minLen) {
        minLen = end - start;
        minStart = start;
      }
      if (++map[s[start]] > 0) counter++;
      start++;
    }
  }

  return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
}

// Test
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
