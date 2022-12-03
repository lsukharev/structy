/**
 * knightly number
 *
 * A knight is on a chess board. Can you figure out the total number of ways
 * the knight can move to a target position in exactly m moves? On a single
 * move, the knight can move in an "L" shape; two spaces in any direction, then
 * one space in a perpendicular direction. This means that on a single move, a
 * knight has
 * {@link https://structy-static.s3.amazonaws.com/knight-movement.png eight possible positions}
 * it can move to.
 *
 * Write a function, knightlyNumber, that takes in 6 arguments:
 *
 * n, m, kr, kc, pr, pc
 *
 * - n = the length of the chess board
 * - m = the number of moves that must be used
 * - kr = the starting row of the knight
 * - kc = the starting column of the knight
 * - pr = the target row
 * - pc = the target column
 *
 * The function should return the number of different ways the knight can move
 * to the target in exactly m moves. The knight can revisit positions of the
 * board if needed. The knight cannot move out-of-bounds of the board. You can
 * assume that rows and columns are 0-indexed. This means that if n = 8, there
 * are 8 rows and 8 columns numbered 0 to 7.
 *
 * - n = length of the board
 * - m = number of moves
 * - Time: O(m * n^2)
 * - Space: O(m * n^2)
 */
export default function knightlyNumber(
  n: number,
  m: number,
  kr: number,
  kc: number,
  pr: number,
  pc: number,
  memo: { [key: string]: number} = {}
): number {
  if (m === 0 && kr === pr && kc === pc) {
    return 1;
  }

  if (m === 0 && (kr !== pr || kc !== pc)) {
    return 0;
  }

  if (kr < 0 || kr >= n || kc < 0 || kc >= n) {
    return 0;
  }

  const key = [m, kr, kc].toString();

  if (key in memo) {
    return memo[key];
  }

  memo[key] = (
    knightlyNumber(n, m - 1, kr + 2, kc + 1, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr + 2, kc - 1, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr - 2, kc + 1, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr - 2, kc - 1, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr + 1, kc + 2, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr - 1, kc + 2, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr + 1, kc - 2, pr, pc, memo)
    + knightlyNumber(n, m - 1, kr - 1, kc - 2, pr, pc, memo)
  );

  return memo[key];
}
