/**
 * permutations
 *
 * Write a function, permutations, that takes in an array an argument. The
 * function should return a 2D array where each subarray represents one of the
 * possible permutations of the array.
 *
 * The subarrays may be returned in any order.
 *
 * You may assume that the input array contains unique elements.
 *
 * - n = length of elements array
 * - Time: ~O(n!)
 * - Space: ~O(n!)
 */
export default function permutations<T>(elements: T[]): T[][] {
  if (elements.length === 0) {
    return [[]];
  }

  const elem = elements[0];
  const result: T[][] = [];

  for (const permuation of permutations(elements.slice(1))) {
    for (let index = 0; index <= permuation.length; index += 1) {
      result.push([...permuation.slice(0, index), elem, ...permuation.slice(index)]);
    }
  }

  return result;
}
