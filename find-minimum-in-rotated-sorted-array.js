const findMin = (nums) => {
  let result = nums[0],
    low = 0,
    high = nums.length - 1,
    mid;

  while (low <= high) {
    if (nums[low] < nums[high]) {
      result = Math.min(result, nums[low]);
      break;
    }

    mid = Math.floor((low + high) / 2);

    result = Math.min(result, nums[mid]);

    if (nums[mid] >= nums[low]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};
