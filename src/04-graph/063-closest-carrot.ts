/**
 * closest carrot
 *
 * Write a function, closestCarrot, that takes in a grid, a starting row, and a
 * starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's
 * are carrots. The function should return a number representing the length of
 * the shortest path from the starting position to a carrot. You may move up,
 * down, left, or right, but cannot pass through walls (X). If there is no
 * possible path to a carrot, then return -1.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(rc)
 * - Space: O(rc)
 */
export default function closestCarrot(grid: string[][], startRow: number, startCol: number): number {
  const queue = [{ row: startRow, col: startCol, pathLength: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { row, col, pathLength } = queue.shift();

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      continue;
    }

    if (grid[row][col] === 'X') {
      continue;
    }

    if (visited.has([row, col].toString())) {
      continue;
    }

    if (grid[row][col] === 'C') {
      return pathLength;
    }

    visited.add([row, col].toString());

    queue.push(
      { row: row + 1, col: col, pathLength: pathLength + 1 },
      { row: row - 1, col: col, pathLength: pathLength + 1 },
      { row: row, col: col + 1, pathLength: pathLength + 1 },
      { row: row, col: col - 1, pathLength: pathLength + 1 }
    );
  }

  return -1;
}
