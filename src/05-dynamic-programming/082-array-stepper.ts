/**
 * array stepper
 *
 * Write a function, arrayStepper, that takes in an array of numbers as an
 * argument. You start at the first position of the array. The function should
 * return a boolean indicating whether or not it is possible to reach the last
 * position of the array. When situated at some position of the array, you may
 * take a maximum number of steps based on the number at that position.
 *
 * ```txt
 * For example, given:
 *
 *   index =  0  1  2  3  4  5
 * numbers = [2, 4, 2, 0, 0, 1]
 *
 * The answer is true.
 * We start at idx 0, we could take 1 step or 2 steps forward.
 * The correct choice is to take 1 step to idx 1.
 * Then take 4 steps forward to the end at idx 5.
 * ```
 *
 * - n = length of numbers
 * - Time: O(n^2)
 * - Space: O(n)
 */
export default function arrayStepper(nums: number[], index: number = 0, memo: { [key: number]: boolean } = {}): boolean {
  if (index === nums.length - 1) {
    return true;
  }

  if (nums[index] === 0) {
    return false;
  }

  if (index in memo) {
    return memo[index];
  }

  for (let steps = 1; steps <= nums[index]; steps += 1) {
    if (arrayStepper(nums, index + steps, memo)) {
      return true;
    }
  }

  memo[index] = false;
  return memo[index];
}
