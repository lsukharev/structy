import Node from './Node'

/**
 * create linked list
 *
 * Write a function, createLinkedList, that takes in an array of values as an
 * argument. The function should create a linked list containing each element
 * of the array as the values of the nodes. The function should return the head
 * of the linked list.
 *
 * - n = length of values
 * - Time: O(n)
 * - Space: O(n)
 */
export function createLinkedList(data: any[]): Node<any> {
  const head = new Node(null);
  let tail = head;

  for (const elem of data) {
    tail.next = new Node(elem);
    tail = tail.next;
  }

  return head.next;
}

/**
 * create linked list (recursive)
 *
 * Write a recursive function, createLinkedListRecursive, that takes in an
 * array of values as an argument. The function should create a linked list
 * containing each element of the array as the values of the nodes. The
 * function should return the head of the linked list.
 *
 * - n = length of values
 * - Time: O(n)
 * - Space: O(n)
 */
export function createLinkedListRecursive(data: any[], index: number = 0): Node<any> {
  if (index === data.length) {
    return null;
  }

  const head = new Node(data[index])
  head.next = createLinkedListRecursive(data, index + 1);
  return head;
}
