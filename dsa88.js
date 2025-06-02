function getSkyline(buildings) {
  const events = [];
  for (const [l, r, h] of buildings) {
    events.push([l, -h]);
    events.push([r, h]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const result = [], heights = [0];
  const heightMap = new Map([[0, 1]]);

  function add(h) {
    heightMap.set(h, (heightMap.get(h) || 0) + 1);
    heights.push(h);
  }

  function remove(h) {
    heightMap.set(h, heightMap.get(h) - 1);
    if (heightMap.get(h) === 0) heightMap.delete(h);
  }

  function getMax() {
    return Math.max(...heightMap.keys());
  }

  let prevMax = 0;
  for (const [x, h] of events) {
    if (h < 0) add(-h);
    else remove(h);
    const currMax = getMax();
    if (currMax !== prevMax) {
      result.push([x, currMax]);
      prevMax = currMax;
    }
  }

  return result;
}

// Test
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
// Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
