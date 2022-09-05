/**
 * max palin subsequence
 *
 * Write a function, maxPalinSubsequence, that takes in a string as an
 * argument. The function should return the length of the longest subsequence
 * of the string that is also a palindrome.
 *
 * A subsequence of a string can be created by deleting any characters of the
 * string, while maintaining the relative order of characters.
 *
 * - n = length of string
 * - Time: O(n^2)
 * - Space: O(n^2)
 */
export default function maxPalinSubsequence(str: string, start = 0, end = str.length - 1, memo: { [key: string]: number } = {}): number {
  const key = [start, end].toString();

  if (key in memo) {
    return memo[key];
  }

  if (start === end) {
    return 1;
  }

  if (start > end) {
    return 0;
  }

  if (str[start] === str[end]) {
    memo[key] = 2 + maxPalinSubsequence(str, start + 1, end - 1, memo);
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, start + 1, end, memo),
      maxPalinSubsequence(str, start, end - 1, memo)
    );
  }

  return memo[key];
}
