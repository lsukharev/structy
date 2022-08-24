/**
 * tribonacci
 *
 * Write a function, tribonacci, that takes in a number argument, num, and
 * returns the n-th number of the Tribonacci sequence.
 *
 * The 0-th and 1-st numbers of the sequence are both 0.
 *
 * The 2-nd number of the sequence is 1.
 *
 * To generate further numbers of the sequence, calculate the sum of previous
 * three numbers.
 *
 * Solve this recursively.
 *
 * - Time: O(n)
 * - Space: O(n)
 */
export default function tribonacci(num: number, memo: { [key: number]: number } = {}): number {
  if (num === 0 || num === 1) {
    return 0;
  }

  if (num === 2) {
    return 1;
  }

  if (num in memo) {
    return memo[num];
  }

  memo[num] = tribonacci(num - 1, memo) + tribonacci(num - 2, memo) + tribonacci(num - 3, memo);
  return memo[num];
}
