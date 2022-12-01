/**
 * min change
 *
 * Write a function, minChange, that takes in an amount and an array of coins.
 * The function should return the minimum number of coins required to create
 * the amount. You may use each coin as many times as necessary.
 *
 * If it is not possible to create the amount, then return -1.
 *
 * - a = amount
 * - c = number of coins
 * - Time: O(a * c)
 * - Space: O(a)
 */
export default function minChange(amount: number, coins: number[]) {
  const answer = minChangeHelper(amount, coins);
  return answer === Infinity ? -1 : answer;
}

function minChangeHelper(amount: number, coins: number[], memo: { [key: number]: number } = {}): number {
  if (amount in memo) {
    return memo[amount];
  }

  if (amount === 0) {
    return 0;
  }

  let minCoins = Infinity;

  for (const coin of coins) {
    if (coin > amount) {
      continue;
    }

    const numCoins = 1 + minChangeHelper(amount - coin, coins, memo);

    if (numCoins < minCoins) {
      minCoins = numCoins;
    }
  }

  memo[amount] = minCoins;
  return memo[amount];
}
