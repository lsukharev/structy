/**
 * Write a function, pairSum, that takes in an array and a target sum as
 * arguments. The function should return an array containing a pair of indices
 * whose elements sum to the given target. The indices returned must be unique.
 *
 * Be sure to return the indices, not the elements themselves.
 *
 * There is guaranteed to be one such pair that sums to the target.
 *
 * - n = length of array
 * - Time: O(n)
 * - Space: O(n)
 */

export const pairSum = (numbers: number[], targetSum: number): number[] => {
  const prevNums: { [elem: number]: number } = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in prevNums) {
      return [prevNums[complement], i];
    }

    prevNums[num] = i;
  }
};
