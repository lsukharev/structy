import Node from '../03-binary-tree/Node';

/**
 * build tree in post
 *
 * Write a function, buildTreeInPost, that takes in an array of in-ordered
 * values and an array of post-ordered values for a binary tree. The function
 * should build a binary tree that has the given in-order and post-order
 * traversal structure. The function should return the root of this tree.
 *
 * You can assume that the values of inorder and postorder are unique.
 *
 * - n = length of array
 * - Time: O(n^2)
 * - Space: O(n^2)
 */
export default function buildTreeInPost<T>(inOrder: T[], postOrder: T[]): Node<T> {
  if (inOrder.length === 0) {
    return null;
  }

  const data = postOrder[postOrder.length - 1];
  const root = new Node(data);
  const middleIndex = inOrder.indexOf(data);

  const leftInOrder = inOrder.slice(0, middleIndex);
  const rightInOrder = inOrder.slice(middleIndex + 1);
  const leftPostOrder = postOrder.slice(0, leftInOrder.length);
  const rightPostOrder = postOrder.slice(leftInOrder.length, -1);

  root.left = buildTreeInPost(leftInOrder, leftPostOrder);
  root.right = buildTreeInPost(rightInOrder, rightPostOrder);

  return root;
}
