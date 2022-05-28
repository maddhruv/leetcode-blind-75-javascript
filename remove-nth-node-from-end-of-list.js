const removeNthFromEnd = (head, n) => {
  const newNode = new ListNode(0, head);
  let left = newNode;
  let right = head;

  while (n) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return newNode.next;
};
