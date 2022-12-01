/**
 * binary search
 *
 * Write a function, binarySearch, that takes in a sorted array of numbers and
 * a target. The function should return the index where the target can be found
 * within the array. If the target is not found in the array, then return -1.
 *
 * You may assume that the input array contains unique numbers sorted in
 * increasing order.
 *
 * Your function must implement the
 * {@link https://en.wikipedia.org/wiki/Binary_search_algorithm binary search algorithm}.
 *
 * - n = length of array
 * - Time: O(log(n))
 * - Space: O(1)
 */
export default function binarySearch(numbers: number[], target: number): number {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (numbers[middle] > target) {
      high = middle - 1;
    } else if (numbers[middle] < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}
