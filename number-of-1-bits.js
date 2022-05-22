const hammingWeight = (n) => {
  let result = 0;

  while (n) {
    result += n % 2; // Either 1 or 0
    n = n >> 1; // Right Shift by 1
  }

  return result;
};
