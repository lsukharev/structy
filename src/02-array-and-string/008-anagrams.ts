/**
 * anagrams
 *
 * Write a function, anagrams, that takes in two strings as arguments. The
 * function should return a boolean indicating whether or not the strings are
 * anagrams. Anagrams are strings that contain the same characters, but in any
 * order.
 *
 * - n = length of string 1
 * - m = length of string 2
 * - Time: O(n + m)
 * - Space: O(n)
 */

export const anagrams = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq: { [key: string]: number } = {};

  for (let ch of str1) {
    if (ch in freq) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }

  for (let ch of str2) {
    if (ch in freq) {
      freq[ch] -= 1;
    } else {
      return false;
    }
  }

  return Object.values(freq).every(count => count === 0);
};
