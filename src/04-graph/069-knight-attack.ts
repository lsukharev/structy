/**
 * knight attack
 *
 * A knight and a pawn are on a chess board. Can you figure out the minimum
 * number of moves required for the knight to travel to the same position of
 * the pawn? On a single move, the knight can move in an "L" shape; two spaces
 * in any direction, then one space in a perpendicular direction. This means
 * that on a single move, a knight has
 * {@link https://structy-static.s3.amazonaws.com/knight-movement.png eight possible positions}
 * it can move to.
 *
 * Write a function, knightAttack, that takes in 5 arguments:
 *
 * n, kr, kr, pr, pc
 *
 * - n = the length of the chess board
 * - kr = the starting row of the knight
 * - kc = the starting column of the knight
 * - pr = the row of the pawn
 * - pc = the column of the pawn
 *
 * The function should return a number representing the minimum number of moves
 * required for the knight to land ontop of the pawn. The knight cannot move
 * out-of-bounds of the board. You can assume that rows and columns are
 * 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered
 * 0 to 7. If it is not possible for the knight to attack the pawn, then return
 * null.
 *
 * - n = length of the board
 * - Time: O(n^2)
 * - Space: O(n^2)
 */
export default function knightAttack(n: number, kr: number, kc: number, pr: number, pc: number): number {
  const queue = [{ row: kr, col: kc, move: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { row, col, move } = queue.shift();

    if (row === pr && col === pc) {
      return move;
    }

    if (row < 0 || row >= n || col < 0 || col >= n) {
      continue;
    }

    const position = [row, col].toString();

    if (visited.has(position)) {
      continue;
    }

    visited.add(position);

    queue.push(
      { row: row + 2, col: col + 1, move: move + 1 },
      { row: row + 2, col: col - 1, move: move + 1 },
      { row: row - 2, col: col + 1, move: move + 1 },
      { row: row - 2, col: col - 1, move: move + 1 },
      { row: row + 1, col: col + 2, move: move + 1 },
      { row: row - 1, col: col + 2, move: move + 1 },
      { row: row + 1, col: col - 2, move: move + 1 },
      { row: row - 1, col: col - 2, move: move + 1 }
    );
  }

  return null;
}
