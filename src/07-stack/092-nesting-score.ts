/**
 * nesting score
 *
 * Write a function, nestingScore, that takes in a string of brackets as an
 * argument. The function should return the score of the string according to
 * the following rules:
 *
 * - [] is worth 1 point
 * - XY is worth m + n points where X, Y are substrings of well-formed brackets
 * and m, n are their respective scores
 * - [S] is worth 2 * k points where S is a substring of well-formed brackets
 * and k is the score of that substring
 *
 * You may assume that the input only contains well-formed square brackets.
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(n)
 */
export default function nestingScore(str: string): number {
  const stack = [0];

  for (const char of str) {
    if (char === '[') {
      stack.push(0);
    }

    if (char === ']') {
      const score = stack.pop();

      if (score === 0) {
        stack.push(stack.pop() + 1);
      }

      if (score > 0) {
        stack.push(stack.pop() + score * 2);
      }
    }
  }

  return stack.pop();
}
