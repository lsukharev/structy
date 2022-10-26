/**
 * positioning plants
 *
 * You've been hired to plant flowers in a garden with n different positions.
 * There are m different flower types. The prices of flower types vary
 * depending on which position they are planted. Your bosses are picky, they
 * tell you to never plant two of the same flower type right next to each
 * other. What is the minimum cost we need to plant a flower in each position
 * of the garden?
 *
 * Write a function, positioningPlants, that takes in a 2D array with
 * dimensions n * m. Each row of the array represents the costs of the flower
 * types at that position. This means that costs[i][j] represents the cost of
 * planting flower type j at position i. For example:
 *
 * ```txt
 * Given these costs,
 *
 * costs = [
 *   [4, 3, 7],
 *   [6, 1, 9],
 *   [2, 5, 3]
 * ]
 *
 * The costs of plants at position 1 are $6, $1, and $9.
 * The cost of planting flower type 0 at position 1 is $6.
 * The cost of planting flower type 2 at position 1 is $9.
 * ```
 *
 * The function should return the minimum cost of planting flowers without
 * placing the same flower type in adjacent positions.
 *
 * - n = # of garden positions (rows)
 * - m = # of plant types (columns)
 * - Time: O(nm)
 * - Space: O(nm)
 */
export default function positioningPlants(costs: number[][], position = 0, lastPlant: number = null, memo: { [key: string]: number } = {}): number {
  const key = `${position},${lastPlant}`;

  if (key in memo) {
    return memo[key];
  }

  if (position === costs.length) {
    return 0;
  }

  let minCost = Infinity;

  for (let plant = 0; plant < costs[position].length; plant += 1) {
    if (plant === lastPlant) {
      continue;
    }

    const cost = costs[position][plant] + positioningPlants(costs, position + 1, plant, memo);
    minCost = Math.min(cost, minCost);
  }

  memo[key] = minCost;
  return memo[key];
}
