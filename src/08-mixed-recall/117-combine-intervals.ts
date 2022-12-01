/**
 * combine intervals
 *
 * Write a function, combineIntervals, that takes in an array of intervals as
 * an argument. Each interval is an array containing a pair of numbers
 * representing a start and end time. Your function should combine overlapping
 * intervals and return an array containing the combined intervals.
 *
 * For example:
 * ```txt
 * Given two intervals:
 *
 * [1, 4] and [3, 7]
 *
 * The intervals overlap and should be combined into:
 *
 * [1, 7]
 * ```
 *
 * You may return the combined intervals in any order.
 *
 * You can assume that the input array contains at least one interval and all
 * intervals are valid with start < end.
 *
 * - n = number of intervals
 * - Time: O(nlog(n))
 * - Space: O(n)
 */
export default function combineIntervals(intervals: [number, number][]): [number, number][] {
  intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);

  const result = [intervals[0]];

  for (const interval of intervals.slice(1)) {
    const [_, lastEnd] = result[result.length - 1];
    const [currentStart, currentEnd] = interval;

    if (currentStart <= lastEnd) {
      if (currentEnd > lastEnd) {
        result[result.length - 1][1] = currentEnd;
      }
    } else {
      result.push(interval)
    }
  }

  return result;
}
