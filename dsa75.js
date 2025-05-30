function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(n) {
    if (visited.has(n)) return visited.get(n);

    const clone = { val: n.val, neighbors: [] };
    visited.set(n, clone);

    for (let neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
