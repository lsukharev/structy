/**
 * lexical order
 *
 * Write a function, lexicalOrder, that takes in 2 words and an alphabet string
 * as an argument. The function should return true if the first word should
 * appear before the second word if
 * {@link https://en.wikipedia.org/wiki/Lexicographic_order lexically-ordered}
 * according to the given alphabet order. If the second word should appear
 * first, then return false.
 *
 * Note that the alphabet string may be any arbitrary string.
 *
 * Intuitively, Lexical Order is like "dictionary" order:
 *
 * You can assume that all characters are lowercase a-z.
 *
 * You can assume that the alphabet contains all 26 letters.
 *
 * - n = length of shorter string
 * - Time: O(n)
 * - Space: O(1)
 */
export default function lexicalOrder(wordA: string, wordB: string, alphabet: string): boolean {
  for (let index = 0; index < Math.max(wordA.length, wordB.length); index += 1) {
    if (wordA[index] === wordB[index]) {
      continue;
    }

    const indexA = alphabet.indexOf(wordA[index]);
    const indexB = alphabet.indexOf(wordB[index]);

    if (indexA < indexB) {
      return true;
    }

    if (indexA > indexB) {
      return false;
    }
  }

  return true;
}
