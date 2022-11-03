/**
 * merge sort
 *
 * Write a function, mergeSort, that takes in an array of numbers as an
 * argument. The function should return a new array containing elements of the
 * original array sorted in ascending order. Your function must implement the
 * {@link https://en.wikipedia.org/wiki/Merge_sort merge sort algorithm}.
 *
 * - n = length of array
 * - Time: O(nlog(n))
 * - Space: O(n)
 */
export default function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const middleIndex = Math.floor(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, middleIndex));
  const right = mergeSort(numbers.slice(middleIndex));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex !== left.length && rightIndex !== right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  if (leftIndex !== left.length) {
    result.push(...left.slice(leftIndex));
  }

  if (rightIndex !== right.length) {
    result.push(...right.slice(rightIndex));
  }

  return result;
}
