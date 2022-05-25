const longestConsecutive = (nums) => {
  const map = {};

  // Skipping all the numbers we have already visited
  const visited = new Set();
  let longest = 0,
    currentLength = 0;

  for (let num of nums) {
    map[num] = true;
  }

  for (let num of nums) {
    if (visited.has(num)) continue;
    if (!map[num - 1]) {
      currentLength = 0;

      while (map[num + currentLength]) {
        visited.add(num + currentLength);
        currentLength++;
      }

      longest = Math.max(currentLength, longest);
    }
  }

  return longest;
};
