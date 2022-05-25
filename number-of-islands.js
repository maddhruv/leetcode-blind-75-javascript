const numIslands = (grid) => {
  const noOfRows = grid.length;
  const noOfCols = grid[0].length;
  let counter = 0;

  const search = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= noOfRows ||
      col >= noOfCols ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "0";

    search(row - 1, col);
    search(row + 1, col);
    search(row, col - 1);
    search(row, col + 1);
  };

  for (let i = 0; i < noOfRows; i++) {
    for (let j = 0; j < noOfCols; j++) {
      if (grid[i][j] === "1") {
        counter++;
        search(i, j);
      }
    }
  }

  return counter;
};
