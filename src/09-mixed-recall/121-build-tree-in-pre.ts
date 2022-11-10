import Node from '../04-binary-tree/Node';

/**
 * build tree in pre
 *
 * Write a function, buildTreeInPre, that takes in an array of in-ordered
 * values and an array of pre-ordered values for a binary tree. The function
 * should build a binary tree that has the given in-order and pre-order
 * traversal structure. The function should return the root of this tree.
 *
 * You can assume that the values of inorder and preorder are unique.
 *
 * - n = length of array
 * - Time: O(n)
 * - Space: O(n)
 */
export default function buildTreeInPre<T>(inOrder: T[], preOrder: T[]) {
  const inOrderIndices: { [key: string]: number } = {};

  for (let index = 0; index < inOrder.length; index += 1) {
    inOrderIndices[inOrder[index].toString()] = index;
  }

  return buildTreeInPreHelper(
    inOrder,
    preOrder,
    inOrderIndices,
    0,
    inOrder.length - 1,
    0,
    preOrder.length - 1
  );
}

function buildTreeInPreHelper<T>(
  inOrder: T[],
  preOrder: T[],
  inOrderIndices: { [key: string]: number },
  startInOrder: number,
  endInOrder: number,
  startPreOrder: number,
  endPreOrder: number
): Node<T> {
  if (startInOrder > endInOrder) {
    return null;
  }

  const root = new Node(preOrder[startPreOrder]);
  const splitIndex = inOrderIndices[preOrder[startPreOrder].toString()];
  const leftSize = splitIndex - startInOrder;

  root.left = buildTreeInPreHelper(
    inOrder,
    preOrder,
    inOrderIndices,
    startInOrder,
    splitIndex - 1,
    startPreOrder + 1,
    startPreOrder + leftSize
  );
  root.right = buildTreeInPreHelper(
    inOrder,
    preOrder,
    inOrderIndices,
    splitIndex + 1,
    endInOrder,
    startPreOrder + leftSize + 1,
    endPreOrder
  );

  return root;
}
