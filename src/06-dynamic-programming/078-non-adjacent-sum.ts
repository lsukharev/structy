/**
 * non adjacent sum
 *
 * Write a function, nonAdjacentSum, that takes in an array of numbers as an
 * argument. The function should return the maximum sum of non-adjacent
 * elements in the array. There is no limit on how many elements can be taken
 * into the sum as long as they are not adjacent.
 *
 * ```txt
 * For example, given:
 *
 * [2, 4, 5, 12, 7]
 *
 * The maximum non-adjacent sum is 16, because 4 + 12. 4 and 12 are not
 * adjacent in the array.
 * ```
 *
 * - n = length of nums
 * - Time: O(n)
 * - Space: O(n)
 */
export default function nonAdjacentSum(nums: number[], index: number = 0, memo: { [key: number]: number } = {}): number {
  if (index in memo) {
    return memo[index];
  }

  if (index >= nums.length) {
    return 0;
  }

  memo[index] = Math.max(
    nums[index] + nonAdjacentSum(nums, index + 2, memo),
    nonAdjacentSum(nums, index + 1, memo)
  );

  return memo[index];
}
