/**
 * uncompress
 *
 * Write a function, uncompress, that takes in a string as an argument. The
 * input string will be formatted into multiple groups according to the
 * following pattern:
 *
 * \<number\>\<char\>
 *
 * for example, '2c' or '3a'.
 *
 * The function should return an uncompressed version of the string where each
 * 'char' of a group is repeated 'number' times consecutively. You may assume
 * that the input string is well-formed according to the previously mentioned
 * pattern.
 *
 * - n = number of groups
 * - m = max num found in any group
 * - Time: O(n * m)
 * - Space: O(n * m)
 */

export default function uncompress(str: string): string {
  let result = '';
  let i = 0;
  let j = 0;

  while (j < str.length) {
    const curr = parseInt(str[j]);

    if (isNaN(curr)) {
      const num = parseInt(str.slice(i, j));
      result += str[j].repeat(num);
      j += 1;
      i = j;
    } else {
      j += 1;
    }
  }

  return result;
}
