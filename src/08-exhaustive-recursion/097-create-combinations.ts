/**
 * create combinations
 *
 * Write a function, createCombinations, that takes in an array and a length as
 * arguments. The function should return a 2D array representing all of the
 * combinations of the specified length.
 *
 * The items within the combinations and the combinations themselves may be
 * returned in any order.
 *
 * You may assume that the input array contains unique elements and
 * 1 <= k <= elements.length.
 *
 * - n = length of elements array
 * - k = target length
 * - Time: ~O(n choose k)
 * - Space: ~O(n choose k)
 *
 * Note: "n Choose k" refers to the binomial coefficient.
 */
export default function createCombinations<T>(elements: T[], length: number): T[][] {
  if (length === 0) {
    return [[]];
  }

  if (elements.length < length) {
    return [];
  }

  const elem = elements[0];
  const combosWithElem = [];

  for (let combination of createCombinations(elements.slice(1), length - 1)) {
    combosWithElem.push([elem, ...combination]);
  }

  const combosWithoutElem = createCombinations(elements.slice(1), length);
  return [...combosWithElem, ...combosWithoutElem];
}
