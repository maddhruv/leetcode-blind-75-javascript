const climbStairs = (n) => {
  let one = (two = 1),
    i = 0,
    temp = one;

  while (i < n - 1) {
    temp = one;
    one += two;
    two = temp;
    i++;
  }

  return one;
};
