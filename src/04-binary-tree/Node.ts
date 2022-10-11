export default class Node<T> {
  data: T;
  left: Node<any>;
  right: Node<any>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  toString(): string {
    let str = '';
    const queue: Node<any>[] = [this];

    while (queue.length > 0) {
      const current = queue.shift();

      str += current.data.toString();

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    return str;
  }
}
