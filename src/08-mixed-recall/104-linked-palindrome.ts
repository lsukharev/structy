import Node from '../02-linked-list/Node';

/**
 * linked palindrome
 *
 * Write a function, linkedPalindrome, that takes in the head of a linked list
 * as an argument. The function should return a boolean indicating whether or
 * not the linked list is a palindrome. A palindrome is a sequence that is the
 * same both forwards and backwards.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export default function linkedPalindrome<T>(head: Node<T> | null): boolean {
  let current = head;
  const values: T[] = [];

  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }

  return values.toString() === values.reverse().toString();
}
