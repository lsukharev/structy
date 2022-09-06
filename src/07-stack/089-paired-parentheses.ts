/**
 * paired parentheses
 *
 * Write a function, pairedParentheses, that takes in a string as an argument.
 * The function should return a boolean indicating whether or not the string
 * has well-formed parentheses.
 *
 * You may assume the string contains only alphabetic characters, '(', or ')'.
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(1)
 */
export default function pairedParentheses(str: string): boolean {
  let count = 0;

  for (const char of str) {
    if (char === '(') {
      count += 1;
    }

    if (char === ')') {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}
