const maxSubArray = (nums) => {
  let max = nums[0],
    current = 0;

  for (let num of nums) {
    if (current < 0) current = 0;
    current += num;

    max = Math.max(max, current);
  }

  return max;
};
