/**
 * subsets
 *
 * Write a function, subsets, that takes in an array as an argument. The
 * function should return a 2D array where each subarray represents one of the
 * possible subsets of the array.
 *
 * The elements within the subsets and the subsets themselves may be returned
 * in any order.
 *
 * You may assume that the input array contains unique elements.
 *
 * - n = length of elements array
 * - Time: ~O(2^n)
 * - Space: ~O(2^n)
 */
export default function subsets(elements: string[]): string[][] {
  if (elements.length === 0) {
    return [[]];
  }

  const elem = elements.shift();
  const subsetsWithoutElem = subsets(elements);
  const subsetsWithElem = [];

  for (const subset of subsetsWithoutElem) {
    subsetsWithElem.push([elem, ...subset]);
  }

  return [...subsetsWithElem, ...subsetsWithoutElem];
}
