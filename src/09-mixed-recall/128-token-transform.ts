/**
 * token transform
 *
 * Write a function, tokenTransform, that takes in an object of tokens and a
 * string. In the object, the replacement values for a token may reference
 * other tokens. The function should return a new string where tokens are
 * replaced with their fully evaluated string values.
 *
 * Tokens are enclosed in a pair of '$'.
 *
 * You may assume that there are no circular token dependencies.
 *
 * - n = length of longest string of value
 * - m = number of unique tokens
 * - Time: ~O(n^m)
 * - Space: ~O(n^m)
 */
export default function tokenTransform(str: string, tokens: { [key: string]: string }): string {
  const evaluatedTokens: { [key: string]: string } = {};
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
      let value = '';
      const token = str.slice(i, j + 1);

      if (token in evaluatedTokens) {
        value = evaluatedTokens[token];
      } else {
        value = tokenTransform(tokens[token], tokens);
        evaluatedTokens[token] = value;
      }

      result.push(value);

      i = j + 1;
      j = i + 1;
    }
  }

  return result.join('');
}
