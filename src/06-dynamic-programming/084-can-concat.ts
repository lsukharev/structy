/**
 * can concat
 *
 * Write a function, canConcat, that takes in a string and an array of words as
 * arguments. The function should return a boolean indicating whether or not it
 * is possible to concatenate words of the array together to form the string.
 *
 * You may reuse words of the array as many times as needed.
 *
 * - s = length of string
 * - w = number of words
 * - Time: ~O(sw)
 * - Space: O(s)
 */
export default function canConcat(str: string, words: string[], memo: { [key: string]: boolean } = {}): boolean {
  if (str in memo) {
    return memo[str];
  }

  if (str.length === 0) {
    return true;
  }

  for (const word of words) {
    if (str.startsWith(word)) {
      if (canConcat(str.slice(word.length), words, memo)) {
        memo[str] = true;
        return memo[str];
      }
    }
  }

  memo[str] = false;
  return memo[str];
}
