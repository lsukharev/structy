/**
 * compress
 *
 * Write a function, compress, that takes in a string as an argument. The
 * function should return a compressed version of the string where consecutive
 * occurrences of the same characters are compressed into the number of
 * occurrences followed by the character. Single character occurrences should
 * not be changed.
 *
 * 'aaa' compresses to '3a'
 * 'cc' compresses to '2c'
 * 't' should remain as 't'
 *
 * You can assume that the input only contains alphabetic characters.
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(n)
 */

export const compress = (str: string): string => {
  let result = '';
  let i = 0;
  let j = 0;

  while (j <= str.length) {
    if (str[i] === str[j]) {
      j += 1;
    } else {
      const count = j - i;
      result += (count > 1 ? count : '') + str[i];
      i = j;
    }
  }

  return result;
};
