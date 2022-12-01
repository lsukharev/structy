/**
 * token replace
 *
 * Write a function, tokenReplace, that takes in an object of tokens and a
 * string. The function should return a new string where tokens are replaced.
 *
 * Tokens are enclosed in a pair of '$'. You can assume that the input string
 * is properly formatted. Tokens should be replaced from left to right in the
 * string (see test_05).
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(n)
 */
export default function tokenReplace(str: string, tokens: { [key: string]: string }): string {
  const result: string[] = [];
  let i = 0;
  let j = 1;

  while (i < str.length) {
    if (str[i] !== '$') {
      result.push(str[i]);
      i += 1;
      j = i + 1;
    } else if (str[j] !== '$') {
      j += 1;
    } else {
      const token = str.slice(i, j + 1);
      result.push(tokens[token]);

      i = j + 1;
      j = i + 1;
    }
  }

  return result.join('');
}
