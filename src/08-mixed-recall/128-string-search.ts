/**
 * string search
 *
 * Write a function, stringSearch, that takes in a grid of letters and a string
 * as arguments. The function should return a boolean indicating whether or not
 * the string can be found in the grid as a path by connecting horizontal or
 * vertical positions. The path can begin at any position, but you cannot reuse
 * a position more than once in the path.
 *
 * You can assume that all letters are lowercase and alphabetic.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(3^(r * c))
 * - Space: O(r * c)
 */
export default function stringSearch(grid: string[][], str: string): boolean {
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (doSearch(grid, row, col, str, 0) === true) {
        return true;
      }
    }
  }

  return false;
}

function doSearch(grid: string[][], row: number, col: number, str: string, index: number): boolean {
  if (index === str.length) {
    return true;
  }

  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
    return false;
  }

  if (grid[row][col] !== str[index]) {
    return false;
  }

  const currentChar = grid[row][col];
  grid[row][col] = '*';

  const foundString = (
    doSearch(grid, row + 1, col, str, index + 1)
      || doSearch(grid, row - 1, col, str, index + 1)
      || doSearch(grid, row, col + 1, str, index + 1)
      || doSearch(grid, row, col - 1, str, index + 1)
  );

  grid[row][col] = currentChar;
  return foundString;
}
