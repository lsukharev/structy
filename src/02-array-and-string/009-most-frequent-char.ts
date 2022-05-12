/**
 * most frequent char
 *
 * Write a function, mostFrequentChar, that takes in a string as an argument.
 * The function should return the most frequent character of the string. If
 * there are ties, return the character that appears earlier in the string.
 *
 * You can assume that the input string is non-empty.
 *
 * - n = length of string
 * - Time: O(n)
 * - Space: O(n)
 */

export const mostFrequentChar = (str: string): string => {
  const freq: { [key: string]: number } = {};

  for (let ch of str) {
    if (ch in freq) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }

  return Object.entries(freq)
    .reduce((prev, curr) => curr[1] > prev[1] ? curr : prev)[0];
};
