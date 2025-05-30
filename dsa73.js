function getSkyline(buildings) {
  const events = [];
  for (let [l, r, h] of buildings) {
    events.push([l, -h]);  // entering
    events.push([r, h]);   // leaving
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const result = [];
  const heights = [0];
  const map = new Map();

  let prevMax = 0;

  for (let [x, h] of events) {
    if (h < 0) {
      heights.push(-h);
    } else {
      heights.splice(heights.indexOf(h), 1);
    }

    const currMax = Math.max(...heights);

    if (currMax !== prevMax) {
      result.push([x, currMax]);
      prevMax = currMax;
    }
  }

  return result;
}

// Test
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12]]));
