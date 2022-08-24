/**
 * fib
 *
 * Write a function fib that takes in a number argument, n, and returns the
 * n-th number of the Fibonacci sequence.
 *
 * The 0-th number of the sequence is 0.
 *
 * The 1-st number of the sequence is 1.
 *
 * To generate further numbers of the sequence, calculate the sum of previous
 * two numbers.
 *
 * Solve this recursively.
 *
 * - Time: O(n)
 * - Space: O(n)
 */
export default function fib(num: number, memo: { [key: number]: number } = {}): number {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  if (num in memo) {
    return memo[num];
  }

  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}
