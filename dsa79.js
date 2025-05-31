class MinHeap {
  constructor() {
    this.data = [];
  }

  push(val) {
    this.data.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown();
    return top;
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }

  _heapifyUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.data[parent][0] > this.data[idx][0]) {
        [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
        idx = parent;
      } else break;
    }
  }

  _heapifyDown() {
    let idx = 0;
    const len = this.data.length;
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;

      if (left < len && this.data[left][0] < this.data[smallest][0]) smallest = left;
      if (right < len && this.data[right][0] < this.data[smallest][0]) smallest = right;
      if (smallest === idx) break;

      [this.data[smallest], this.data[idx]] = [this.data[idx], this.data[smallest]];
      idx = smallest;
    }
  }
}

function trapRainWater(heightMap) {
  if (!heightMap.length || !heightMap[0].length) return 0;

  const m = heightMap.length;
  const n = heightMap[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const heap = new MinHeap();

  // Add boundary to heap
  for (let i = 0; i < m; i++) {
    heap.push([heightMap[i][0], i, 0]);
    heap.push([heightMap[i][n - 1], i, n - 1]);
    visited[i][0] = visited[i][n - 1] = true;
  }
  for (let j = 1; j < n - 1; j++) {
    heap.push([heightMap[0][j], 0, j]);
    heap.push([heightMap[m - 1][j], m - 1, j]);
    visited[0][j] = visited[m - 1][j] = true;
  }

  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
  let water = 0;

  while (heap.size()) {
    const [h, r, c] = heap.pop();

    for (let [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < m && nc < n && !visited[nr][nc]) {
        visited[nr][nc] = true;
        water += Math.max(0, h - heightMap[nr][nc]);
        heap.push([Math.max(h, heightMap[nr][nc]), nr, nc]);
      }
    }
  }

  return water;
}

// Test
console.log(trapRainWater([
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
])); // Output: 4
