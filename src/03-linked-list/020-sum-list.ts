import Node from './Node';

/**
 * sum list
 *
 * Write a function, sumList, that takes in the head of a linked list
 * containing numbers as an argument. The function should return the total sum
 * of all values in the linked list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function sumList(head: Node<number> | null): number {
  let sum = 0;
  let curr = head;

  while (curr !== null) {
    sum += curr.data;
    curr = curr.next;
  }

  return sum;
}

/**
 * sum list (recursive)
 *
 * Write a recursive function, sumListRecursive, that takes in the head of a
 * linked list containing numbers as an argument. The function should return
 * the total sum of all values in the linked list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function sumListRecursive(head: Node<number> | null): number {
  if (head === null) {
    return 0;
  }

  return head.data + sumListRecursive(head.next);
}
