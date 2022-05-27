// Two Pointers
const hasCycle = (head) => {
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
};

// Using Hash Map/Set
const hasCycle2 = (head) => {
  let visited = new Set();

  let current = head;

  if (!current) return false;

  while (current) {
    if (visited.has(current)) return true;
    visited.add(current);
    current = current.next;
  }

  return false;
};
