import Node from './Node';

/**
 * insert node
 *
 * Write a function, insertNode, that takes in the head of a linked list, a
 * value, and an index. The function should insert a new node with the value
 * into the list at the specified index. Consider the head of the linked list
 * as index 0. The function should return the head of the resulting linked
 * list.
 *
 * Do this in-place.
 *
 * You may assume that the input list is non-empty and the index is not greater
 * than the length of the input list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(1)
 */
export function insertNode<T>(head: Node<any>, data: T, index: number): Node<any> {
  if (index === 0) {
    const node = new Node(data);
    node.next = head;
    return node;
  }

  let curr = head;
  let iter = 0;

  while (curr !== null) {
    if (iter === index - 1) {
      const next = curr.next;
      curr.next = new Node(data);
      curr.next.next = next;
    }

    iter += 1;
    curr = curr.next;
  }

  return head;
}

/**
 * insert node (recursive)
 *
 * Write a recursive function, insertNodeRecursive, that takes in the head of a
 * linked list, a value, and an index. The function should insert a new node
 * with the value into the list at the specified index. Consider the head of
 * the linked list as index 0. The function should return the head of the
 * resulting linked list.
 *
 * Do this in-place.
 *
 * You may assume that the input list is non-empty and the index is not greater
 * than the length of the input list.
 *
 * - n = number of nodes
 * - Time: O(n)
 * - Space: O(n)
 */
export function insertNodeRecursive<T>(head: Node<any>, data: T, index: number, iter: number = 0): Node<any> {
  if (head === null) {
    return null;
  }

  if (index === 0) {
    const node = new Node(data);
    node.next = head;
    return node;
  }

  if (iter === index - 1) {
    const next = head.next;
    head.next = new Node(data);
    head.next.next = next;
    return null;
  }

  insertNodeRecursive(head.next, data, index, iter + 1);
  return head;
}
