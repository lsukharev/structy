import Node from './Node';

/**
 * linked list values
 *
 * Write a function, linkedListValues, that takes in the head of a linked list
 * as an argument. The function should return an array containing all values of
 * the nodes in the linked list.
 *
 * Hey. This is our first linked list problem, so you should be liberal with
 * watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function linkedListValues(head: Node<any> | null): any[] {
  const data = [];
  let curr = head;

  while (curr !== null) {
    data.push(curr.data);
    curr = curr.next;
  }

  return data;
}

/**
 * linked list values (recursive)
 *
 * Write a recursive function, linkedListValuesRecursive, that takes in the
 * head of a linked list as an argument. The function should return an array
 * containing all values of the nodes in the linked list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function linkedListValuesRecursive(head: Node<any> | null): any[] {
  const data: any[] = [];
  _linkedListValuesRecursive(head, data);
  return data;
}

function _linkedListValuesRecursive(head: Node<any>, data: any[]): any[] {
  if (head === null) {
    return;
  }

  data.push(head.data);
  _linkedListValuesRecursive(head.next, data);
}
