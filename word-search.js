const exist = (board, word) => {
  const rows = board.length,
    columns = board[0].length,
    visited = new Set();

  const dfs = (r, c, index) => {
    if (index === word.length) return true;
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= columns ||
      board[r][c] !== word[index] ||
      visited.has(`${r},${c}`)
    )
      return false;

    visited.add(`${r},${c}`);
    let result =
      dfs(r - 1, c, index + 1) ||
      dfs(r + 1, c, index + 1) ||
      dfs(r, c - 1, index + 1) ||
      dfs(r, c + 1, index + 1);
    visited.delete(`${r},${c}`);
    return result;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
