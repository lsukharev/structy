/**
 * sum possible
 *
 * Write a function, sumPossible, that takes in an amount and an array of
 * positive numbers. The function should return a boolean indicating whether or
 * not it is possible to create the amount by summing numbers of the array. You
 * may reuse numbers of the array as many times as necessary.
 *
 * You may assume that the target amount is non-negative.
 *
 * - a = amount
 * - n = length of numbers
 * - Time: O(a * n)
 * - Space: O(a)
 */
export default function sumPossible(amount: number, numbers: number[], memo: { [key: number]: boolean } = {}): boolean {
  if (amount in memo) {
    return memo[amount];
  }

  if (amount === 0) {
    return true;
  }

  for (const num of numbers) {
    if (num > amount) {
      continue;
    }

    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return memo[amount];
    }
  }

  memo[amount] = false;
  return memo[amount];
}
