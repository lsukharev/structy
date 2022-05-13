/**
 * intersection
 *
 * Write a function, intersection, that takes in two arrays, a and b, as
 * arguments. The function should return a new array containing elements that
 * are in both of the two arrays.
 *
 * You may assume that each input array does not contain duplicate elements.
 *
 * - n = length of array a
 * - m = length of array b
 * - Time: O(n + m)
 * - Space: O(n)
 */

export default function intersection(a: number[], b: number[]): number[] {
  const result: number[] = [];
  const itemsInA = new Set<number>(a);

  for (let elem of b) {
    if (itemsInA.has(elem)) {
      result.push(elem);
    }
  }

  return result;
}
