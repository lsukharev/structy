import lexicalOrder from './124-lexical-order';

/**
 * detect dictionary
 *
 * Write a function, detectDictionary, that takes in a dictionary of words and
 * an alphabet string. The function should return a boolean indicating whether
 * or not all words of the dictionary are
 * {@link https://en.wikipedia.org/wiki/Lexicographic_order lexically-ordered}
 * according to the alphabet.
 *
 * You can assume that all characters are lowercase a-z.
 *
 * You can assume that the alphabet contains all 26 letters.
 *
 * - n = # of words in dictionary
 * - k = length of longest word
 * - Time: O(nk)
 * - Space: O(1)
 */
export default function detectDictionary(dictionary: string[], alphabet: string): boolean {
  for (let index = 0; index < dictionary.length - 1; index += 1) {
    if (lexicalOrder(dictionary[index], dictionary[index + 1], alphabet) === false) {
      return false;
    }
  }

  return true;
}
