/**
 * quickest concat
 *
 * Write a function, quickestConcat, that takes in a string and an array of
 * words as arguments. The function should return the minimum number of words
 * needed to build the string by concatenating words of the array.
 *
 * You may use words of the array as many times as needed.
 *
 * - s = length of string
 * - w = number of words
 * - Time: ~O(sw)
 * - Space: O(s)
 */
export default function quickestConcat(str: string, words: string[]): number {
  const result = quickestConcatHelper(str, words);
  return result === Infinity ? -1 : result;
}

function quickestConcatHelper(str: string, words: string[], memo: { [key: string]: number } = {}): number {
  if (str in memo) {
    return memo[str];
  }

  if (str.length === 0) {
    return 0;
  }

  let minWords = Infinity;

  for (const word of words) {
    if (str.startsWith(word)) {
      const numWords = 1 + quickestConcatHelper(str.slice(word.length), words, memo);
      minWords = Math.min(numWords, minWords);
    }
  }

  memo[str] = minWords;
  return minWords;
}
