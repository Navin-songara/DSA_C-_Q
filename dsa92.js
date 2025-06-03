function alienOrder(words) {
  const graph = {}, inDegree = {};
  for (let word of words) {
    for (let char of word) {
      graph[char] = new Set();
      inDegree[char] = 0;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let [w1, w2] = [words[i], words[i + 1]];
    let len = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.startsWith(w2)) return "";

    for (let j = 0; j < len; j++) {
      if (w1[j] !== w2[j]) {
        if (!graph[w1[j]].has(w2[j])) {
          graph[w1[j]].add(w2[j]);
          inDegree[w2[j]]++;
        }
        break;
      }
    }
  }

  const queue = Object.keys(inDegree).filter(c => inDegree[c] === 0);
  let result = "";

  while (queue.length) {
    const char = queue.shift();
    result += char;
    for (let nei of graph[char]) {
      inDegree[nei]--;
      if (inDegree[nei] === 0) queue.push(nei);
    }
  }

  return result.length === Object.keys(inDegree).length ? result : "";
}

// Test
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // Output: "wertf"
