const getSum = (a, b) => {
  let carry;

  while (b) {
    carry = a & b;
    a ^= b;
    b = carry << 1;
  }

  return a;
};
