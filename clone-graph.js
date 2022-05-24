const cloneGraph = (node) => {
  const map = {};

  const traverse = (n) => {
    if (!n) return n;

    if (!map[n.val]) {
      map[n.val] = new Node(n.val);
      map[n.val].neighbors = n.neighbors.map(traverse);
    }

    return map[n.val];
  };

  return traverse(node);
};
