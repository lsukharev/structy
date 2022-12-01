/**
 * overlap subsequence
 *
 * Write a function, overlapSubsequence, that takes in two strings as
 * arguments. The function should return the length of the longest overlapping
 * subsequence.
 *
 * A subsequence of a string can be created by deleting any characters of the
 * string, while maintaining the relative order of characters.
 *
 * - n = length of strA
 * - m = length of strB
 * - Time: O(n * m)
 * - Space: O(n * m)
 */
export default function overlapSubsequence(strA: string, strB: string, indexA = 0, indexB = 0, memo: { [key: string]: number } = {}): number {
  const key = [indexA, indexB].toString();

  if (key in memo) {
    return memo[key];
  }

  if (indexA === strA.length || indexB === strB.length) {
    return 0;
  }

  if (strA[indexA] === strB[indexB]) {
    memo[key] = 1 + overlapSubsequence(strA, strB, indexA + 1, indexB + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(strA, strB, indexA + 1, indexB, memo),
      overlapSubsequence(strA, strB, indexA, indexB + 1, memo)
    );
  }

  return memo[key];
}
