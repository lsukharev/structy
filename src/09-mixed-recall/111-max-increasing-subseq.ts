/**
 * max increasing subseq
 *
 * Write a function, maxIncreasingSubseq, that takes in an array of numbers as
 * an argument. The function should return the length of the longest
 * subsequence of strictly increasing numbers.
 *
 * A subsequence of an array can be created by deleting any elements of the
 * array, while maintaining the relative order of elements.
 *
 * - n = length of array
 * - Time: O(n^2)
 * - Space: O(n^2)
 */
export default function maxIncreasingSubseq(numbers: number[], index = 0, previous = -Infinity, memo: { [key: string]: number } = {}): number {
  const key = `${index},${previous}`;

  if (key in memo) {
    return memo[key];
  }

  if (index === numbers.length) {
    return 0;
  }

  const current = numbers[index];
  const skipCurrent = maxIncreasingSubseq(numbers, index + 1, previous, memo);
  const takeCurrent = current > previous
    ? 1 + maxIncreasingSubseq(numbers, index + 1, current, memo)
    : 0;

  memo[key] = Math.max(skipCurrent, takeCurrent);
  return memo[key];
}
