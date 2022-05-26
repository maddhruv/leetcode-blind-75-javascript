const insert = (intervals, newInterval) => {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (newInterval[0] > interval[1]) {
      result.push(interval);
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval);
      return result.concat(intervals.splice(i));
    } else {
      newInterval = [
        Math.min(newInterval[0], interval[0]),
        Math.max(newInterval[1], interval[1]),
      ];
    }
  }

  result.push(newInterval);
  return result;
};
