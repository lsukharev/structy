/**
 * substitute synonyms
 *
 * Write a function, substituteSynonyms, that takes in a sentence and an
 * object as arguments. The object contains words as keys whose values are
 * arrays containing synonyms. The function should return an array containing
 * all possible sentences that can be formed by substituting words of the
 * sentence with their synonyms.
 *
 * You may return the possible sentences in any order, as long as you return
 * all of them.
 *
 * - n = number of words in sentence
 * - m = max number of synonyms for a word
 * - Time: ~O(m^n)
 * - Space: ~O(m^n)
 */
export default function substituteSynonyms(sentence: string, synonyms: { [key: string]: string[] }): string[] {
  if (sentence.length === 0) {
    return [''];
  }

  const words = sentence.split(' ');
  const subsentences = substituteSynonyms(words.slice(1).join(' '), synonyms);
  const sentences: string[] = [];

  if (words[0] in synonyms) {
    for (const synonym of synonyms[words[0]]) {
      for (const subsentence of subsentences) {
        sentences.push(synonym + (subsentence.length > 0 ? ' ' : '') + subsentence);
      }
    }
  } else {
    for (const subsentence of subsentences) {
      sentences.push(words[0] + (subsentence.length > 0 ? ' ' : '') + subsentence);
    }
  }

  return sentences;
}
