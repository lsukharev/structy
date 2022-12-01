/**
 * breaking boundaries
 *
 * Write a function, breakingBoundaries, that takes in 5 arguments: a number of
 * rows (m), a number of columns (n), a number of moves (k), a starting row
 * (r), and a starting column (c). Say you were situated in a grid with
 * dimensions m * n. If you had to start at position (r,c), in how many
 * different ways could you move out of bounds if you could take at most k
 * moves. A single move is moving one space up, down, left, or right. During a
 * path you may revisit a position.
 *
 * For example:
 * ```txt
 * Given m, n, k, r, c:
 *
 * 3, 4, 2, 0, 0
 *
 * This input asks us to count the numbers of ways to move out of bounds in a
 * 3 by 4 grid, starting at position (0, 0) if we could take at most 2 moves.
 *
 * The answer is 4 because of these 4 distinct ways:
 *  1. left
 *  2. up
 *  3. right, up
 *  4. down, left
 * ```
 *
 * The function should return a number representing how many ways you can move
 * out of bounds.
 *
 * - m = number of rows
 * - n = number of columns
 * - k = number of moves
 * - Time: O(mnk)
 * - Space: O(mnk)
 */
export default function breakingBoundaries(
  numRows: number,
  numCols: number,
  moves: number,
  startingRow: number,
  startingCol: number,
  memo: { [key: string]: number } = {}
): number {
  const key = `${moves},${startingRow},${startingCol}`;

  if (key in memo) {
    return memo[key];
  }

  if (startingRow >= numRows || startingRow < 0 || startingCol >= numCols || startingCol < 0) {
    return 1;
  }

  if (moves === 0) {
    return 0;
  }

  memo[key] = breakingBoundaries(numRows, numCols, moves - 1, startingRow + 1, startingCol, memo)
    + breakingBoundaries(numRows, numCols, moves - 1, startingRow - 1, startingCol, memo)
    + breakingBoundaries(numRows, numCols, moves - 1, startingRow, startingCol + 1, memo)
    + breakingBoundaries(numRows, numCols, moves - 1, startingRow, startingCol - 1, memo);
  return memo[key];
}
