function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  const visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

  for (const [course, pre] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course).push(pre);
  }

  function dfs(course) {
    if (visited[course] === 1) return false; // cycle
    if (visited[course] === 2) return true;  // already checked

    visited[course] = 1;

    for (const pre of graph.get(course) || []) {
      if (!dfs(pre)) return false;
    }

    visited[course] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

// Test
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
