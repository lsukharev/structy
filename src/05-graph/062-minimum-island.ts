/**
 * minimum island
 *
 * Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
 * W represents water and L represents land. The function should return the
 * size of the smallest island. An island is a vertically or horizontally
 * connected region of land.
 *
 * You may assume that the grid contains at least one island.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(rc)
 * - Space: O(rc)
 */
export default function minimumIsland(grid: string[][]): number {
  const visited = new Set<string>();
  let minimumSize = Infinity;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      const currentSize = explore(grid, row, col, visited);

      if (currentSize > 0 && currentSize < minimumSize) {
        minimumSize = currentSize;
      }
    }
  }

  return minimumSize;
}

function explore(grid: string[][], row: number, col: number, visited: Set<string>): number {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
    return 0;
  }

  if (grid[row][col] === 'W') {
    return 0;
  }

  if (visited.has([row, col].toString())) {
    return 0;
  }

  visited.add([row, col].toString());

  let size = 1;

  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);

  return size;
}
