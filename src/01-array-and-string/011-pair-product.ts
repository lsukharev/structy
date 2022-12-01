/**
 * pair product
 *
 * Write a function, pairProduct, that takes in an array and a target product
 * as arguments. The function should return an array containing a pair of
 * indices whose elements multiply to the given target. The indices returned
 * must be unique.
 *
 * Be sure to return the indices, not the elements themselves.
 *
 * There is guaranteed to be one such pair whose product is the target.
 *
 * - n = length of array
 * - Time: O(n)
 * - Space: O(n)
 */

export default function pairProduct (numbers: number[], targetProduct: number): number[] {
  const prevNums: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in prevNums) {
      return [prevNums[complement], i];
    }

    prevNums[num] = i;
  }
}
