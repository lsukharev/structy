/**
 * decompress braces
 *
 * Write a function, decompressBraces, that takes in a compressed string as an
 * argument. The function should return the string decompressed.
 *
 * The compression format of the input string is 'n{subString}', where the
 * subString within braces should be repeated n times.
 *
 * You may assume that every number n is guaranteed to be an integer between 1
 * through 9.
 *
 * You may assume that the input is valid and the decompressed string will only
 * contain alphabetic characters.
 *
 * - s = length of string
 * - m = number of brace pairs
 * - Time: O((9^m) * s)
 * - Space: O((9^m) * s)
 */
export default function decompressBraces(str: string): string {
  const stack: string[] = [];

  for (const char of str) {
    if (char === '{') {
      continue;
    }

    if (char === '}') {
      decompress(stack);
      continue;
    }

    stack.push(char);
  }

  return stack.join('');
}

function decompress(stack: string[]) {
  let segment = '';

  while (stack.length > 0) {
    const item = stack.pop();
    const num = parseInt(item, 10);

    if (Number.isInteger(num)) {
      stack.push(segment.repeat(num));
      break;
    }

    segment = item + segment;
  }
}
