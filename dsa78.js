function numIslands2(m, n, positions) {
  const roots = new Array(m * n).fill(-1);
  const res = [];
  let count = 0;

  function find(x) {
    while (x !== roots[x]) x = roots[x];
    return x;
  }

  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];

  for (let [r, c] of positions) {
    const idx = r * n + c;
    if (roots[idx] !== -1) {
      res.push(count); continue;
    }

    roots[idx] = idx;
    count++;

    for (let [dr, dc] of dirs) {
      let nr = r + dr, nc = c + dc, ni = nr * n + nc;
      if (nr >= 0 && nc >= 0 && nr < m && nc < n && roots[ni] !== -1) {
        let root1 = find(idx), root2 = find(ni);
        if (root1 !== root2) {
          roots[root1] = root2;
          count--;
        }
      }
    }

    res.push(count);
  }

  return res;
}

// Test
console.log(numIslands2(3, 3, [[0,0],[0,1],[1,2],[2,1]])); // [1,1,2,3]
