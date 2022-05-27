const reverseList = (head) => {
  let current = head,
    prev = null,
    next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
