const maxArea = (height) => {
  let resultantArea = 0,
    low = 0,
    high = height.length - 1;

  while (low < high) {
    const smallestHeight = Math.min(height[low], height[high]);

    const area = smallestHeight * (high - low);

    resultantArea = Math.max(resultantArea, area);

    height[low] < height[high] ? low++ : high--;
  }

  return resultantArea;
};
