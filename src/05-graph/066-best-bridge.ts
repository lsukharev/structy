/**
 * best bridge
 *
 * Write a function, bestBridge, that takes in a grid as an argument. The grid
 * contains water (W) and land (L). There are exactly two islands in the grid.
 * An island is a vertically or horizontally connected region of land. Return
 * the minimum length bridge needed to connect the two islands. A bridge does
 * not need to form a straight line.
 *
 * - r = number of rows
 * - c = number of columns
 * - Time: O(rc)
 * - Space: O(rc)
 */
export default function bestBridge(grid: string[][]): number {
  let startingIsland: Set<string> = null;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      const potentialIsland = traverseIsland(grid, row, col, new Set<string>());

      if (potentialIsland.size > 0) {
        startingIsland = potentialIsland;
        break;
      }
    }
  }

  const queue: { row: number, col: number, distance: number }[] = [];
  const visited = new Set<string>();

  for (let position of startingIsland) {
    const [row, col] = position
      .split(',')
      .map(coordinate => parseInt(coordinate, 10));
    queue.push({ row, col, distance: 0 });
  }

  while (queue.length > 0) {
    const { row, col, distance } = queue.shift();
    const position = [row, col].toString();

    if (visited.has(position)) {
      continue;
    }

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      continue;
    }

    if (grid[row][col] === 'L' && !startingIsland.has(position)) {
      return distance - 1;
    }

    visited.add(position);

    queue.push({ row: row + 1, col: col, distance: distance + 1 });
    queue.push({ row: row - 1, col: col, distance: distance + 1 });
    queue.push({ row: row, col: col + 1, distance: distance + 1 });
    queue.push({ row: row, col: col - 1, distance: distance + 1 });
  }
}

function traverseIsland(grid: string[][], row: number, col: number, visited: Set<string>): Set<string> {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
    return visited;
  }

  if (grid[row][col] === 'W') {
    return visited;
  }

  const position = [row, col].toString();

  if (visited.has(position)) {
    return visited;
  }

  visited.add(position);

  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row, col + 1, visited);
  traverseIsland(grid, row, col - 1, visited);

  return visited;
}
