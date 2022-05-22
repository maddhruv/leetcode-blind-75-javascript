const search = (nums, target) => {
  let result = -1,
    low = 0,
    high = nums.length - 1,
    mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      result = mid;
      break;
    }

    if (nums[low] <= nums[mid]) {
      if (target > nums[mid] || target < nums[low]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[high]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return result;
};
