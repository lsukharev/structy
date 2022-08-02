/**
 * island count
 *
 * Write a function, islandCount, that takes in a grid containing Ws and Ls. W
 * represents water and L represents land. The function should return the
 * number of islands on the grid. An island is a vertically or horizontally
 * connected region of land.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(rc)
 * - Space: O(rc)
 */
export default function islandCount(grid: string[][]): number {
  const visited = new Set<string>();
  let count = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (explore(grid, row, col, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
}

function explore(grid: string[][], row: number, col: number, visited: Set<string>): boolean {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
    return false;
  }

  if (grid[row][col] === 'W') {
    return false;
  }

  if (visited.has([row, col].toString())) {
    return false;
  }

  visited.add([row, col].toString());

  explore(grid, row + 1, col, visited);
  explore(grid, row - 1, col, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);

  return true;
}
