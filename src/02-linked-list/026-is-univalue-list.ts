import Node from './Node';

/**
 * is univalue list
 *
 * Write a function, isUnivalueList, that takes in the head of a linked list as
 * an argument. The function should return a boolean indicating whether or not
 * the linked list contains exactly one unique value.
 *
 * You may assume that the input list is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function isUnivalueList(head: Node<any>): boolean {
  let curr = head;
  const value = head.data;

  while (curr !== null) {
    if (curr.data !== value) {
      return false;
    }

    curr = curr.next;
  }

  return true;
}

/**
 * is univalue list (recursive)
 *
 * Write a recursive function, isUnivalueListRecursive, that takes in the head
 * of a linked list as an argument. The function should return a boolean
 * indicating whether or not the linked list contains exactly one unique value.
 *
 * You may assume that the input list is non-empty.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function isUnivalueListRecursive(head: Node<any>, prev: Node<any> = null): boolean {
  if (head === null) {
    return true;
  }

  if (prev !== null && head.data !== prev.data) {
    return false;
  }

  return isUnivalueListRecursive(head.next, head);
}
