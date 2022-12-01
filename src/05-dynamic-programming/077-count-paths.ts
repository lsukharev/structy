/**
 * count paths
 *
 * Write a function, countPaths, that takes in a grid as an argument. In the
 * grid, 'X' represents walls and 'O' represents open spaces. You may only move
 * down or to the right and cannot pass through walls. The function should
 * return the number of ways possible to travel from the top-left corner of the
 * grid to the bottom-right corner.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(r * c)
 * - Space: O(r * c)
 */
export default function countPaths(grid: string[][], row: number = 0, col: number = 0, memo: { [key: string]: number } = {}): number {
  const position = [row, col].toString();

  if (position in memo) {
    return memo[position];
  }

  if (row === grid.length || col === grid[row].length || grid[row][col] === 'X') {
    return 0;
  }

  if (row === grid.length - 1 && col === grid[row].length - 1) {
    return 1;
  }

  memo[position] = countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo);
  return memo[position];
}
