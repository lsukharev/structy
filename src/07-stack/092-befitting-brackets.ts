/**
 * befitting brackets
 *
 * Write a function, befittingBrackets, that takes in a string as an argument.
 * The function should return a boolean indicating whether or not the string
 * contains correctly matched brackets.
 *
 * You may assume the string contains only characters: ( ) [ ] { }
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(n)
 */
export default function befittingBrackets(str: string): boolean {
  const stack: string[] = [];
  const brackets: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (const char of str) {
    if (char in brackets) {
      stack.push(char);
    } else {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
