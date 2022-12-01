/**
 * counting change
 *
 * Write a function, countingChange, that takes in an amount and an array of
 * coins. The function should return the number of different ways it is
 * possible to make change for the given amount using the coins.
 *
 * You may reuse a coin as many times as necessary.
 *
 * ```txt
 * For example,
 *
 * countingChange(4, [1, 2, 3]) -> 4
 *
 * There are four different ways to make an amount of 4:
 *
 * 1. 1 + 1 + 1 + 1
 * 2. 1 + 1 + 2
 * 3. 1 + 3
 * 4. 2 + 2
 * ```
 *
 * - a = amount
 * - c = number of coins
 * - Time: O(a * c)
 * - Space: O(a * c)
 */
export default function countingChange(amount: number, coins: number[], index: number = 0, memo: { [key: string]: number } = {}): number {
  const key = [amount, index].toString();

  if (key in memo) {
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }

  const coin = coins[index];
  let count = 0;

  for (let quantity = 0; coin * quantity <= amount; quantity += 1) {
    const remainder = amount - (coin * quantity);
    count += countingChange(remainder, coins, index + 1, memo);
  }

  memo[key] = count;
  return memo[key];
}
