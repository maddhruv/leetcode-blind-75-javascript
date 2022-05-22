const twoSum = (nums, target) => {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const consolidated = target - num;

    if (consolidated in indexMap) {
      return [indexMap[consolidated], i];
    }
    indexMap[num] = i;
  }
};
