/**
 * max path sum
 *
 * Write a function, maxPathSum, that takes in a grid as an argument. The
 * function should return the maximum sum possible by traveling a path from the
 * top-left corner to the bottom-right corner. You may only travel through the
 * grid by moving down or right.
 *
 * You can assume that all numbers are non-negative.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(r * c)
 * - Space: O(r * c)
 */
export default function maxPathSum(grid: number[][], row: number = 0, col: number = 0, memo: { [key: string]: number } = {}): number {
  const position = [row, col].toString();

  if (position in memo) {
    return memo[position];
  }

  if (row === grid.length - 1 && col === grid[row].length - 1) {
    return grid[row][col];
  }

  if (row === grid.length || col === grid[row].length) {
    return -Infinity;
  }

  memo[position] = grid[row][col] + Math.max(maxPathSum(grid, row + 1, col, memo), maxPathSum(grid, row, col + 1, memo));
  return memo[position];
}
