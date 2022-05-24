const canFinish = (numCourses, prerequisites) => {
  const preReqMap = {},
    visited = new Set();

  for (let i = 0; i < numCourses; i++) {
    preReqMap[i] = [];
  }

  prerequisites.forEach((dep) => {
    preReqMap[dep[0]].push(dep[1]);
  });

  const dfs = (course) => {
    if (visited.has(course)) return false;

    if (preReqMap[course].length === 0) return true;

    visited.add(course);

    for (let pre of preReqMap[course]) {
      if (!dfs(pre)) return false;
    }

    visited.delete(course);
    preReqMap[course] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};
