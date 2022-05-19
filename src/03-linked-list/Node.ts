export default class Node<T> {
  data: T;
  next: Node<any>;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
