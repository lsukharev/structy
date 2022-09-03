/**
 * summing squares
 *
 * Write a function, summingSquares, that takes a target number as an argument.
 * The function should return the minimum number of perfect squares that sum to
 * the target. A perfect square is a number of the form (i*i) where i >= 1.
 *
 * For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
 *
 * ```txt
 * Given 12:
 *
 * summingSquares(12) -> 3
 *
 * The minimum squares required for 12 is three, by doing 4 + 4 + 4.
 *
 * Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
 * ```
 *
 * - n = length of nums
 * - Time: O(n * sqrt(n))
 * - Space: O(n)
 */
export default function summingSquares(num: number, memo: { [key: number]: number } = {}): number {
  if (num === 0) {
    return 0;
  }

  if (num in memo) {
    return memo[num];
  }

  let minSquares = Infinity;

  for (let index = 1; index <= Math.sqrt(num); index += 1) {
    const square = Math.pow(index, 2);
    const numSquares = 1 + summingSquares(num - square, memo)
    minSquares = Math.min(minSquares, numSquares);
  }

  memo[num] = minSquares;
  return memo[num];
}
