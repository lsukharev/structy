/**
 * max value
 *
 * Write a function, maxValue, that takes in an array of numbers as an
 * argument. The function should return the largest number in the array.
 *
 * Solve this without using any built-in array methods.
 *
 * You can assume that the array is non-empty.
 *
 * - n = length of array
 * - Time: O(n)
 * - Space: O(1)
 */

export const maxValue = (nums: number[]): number => {
  let max = nums[0];

  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
};
