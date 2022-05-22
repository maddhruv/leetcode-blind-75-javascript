const maxProduct = (nums) => {
  let max = Math.max(...nums),
    currentMin = (currentMax = 1);

  for (let num of nums) {
    if (num === 0) {
      currentMin = currentMax = 1;
      continue;
    }

    const temp = currentMax * num;
    currentMax = Math.max(temp, currentMin * num, num);
    currentMin = Math.min(temp, currentMin * num, num);
    max = Math.max(max, currentMax);
  }

  return max;
};
