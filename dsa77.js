function alienOrder(words) {
  const graph = {};
  const indegree = {};

  for (let word of words) {
    for (let char of word) {
      graph[char] = new Set();
      indegree[char] = 0;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i], w2 = words[i+1];
    let minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.startsWith(w2)) return "";

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!graph[w1[j]].has(w2[j])) {
          graph[w1[j]].add(w2[j]);
          indegree[w2[j]]++;
        }
        break;
      }
    }
  }

  const queue = Object.keys(indegree).filter(k => indegree[k] === 0);
  const result = [];

  while (queue.length) {
    const char = queue.shift();
    result.push(char);
    for (let neighbor of graph[char]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === Object.keys(indegree).length ? result.join('') : "";
}

// Test
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // "wertf"
