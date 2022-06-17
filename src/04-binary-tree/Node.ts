export default class Node<T> {
  data: T;
  left: Node<any>;
  right: Node<any>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
