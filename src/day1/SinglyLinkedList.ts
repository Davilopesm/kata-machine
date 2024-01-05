interface Node<T> {
  value: T;
  next?: Node<T>;
}

export default class SinglyLinkedList<T> {
  public length: number;
  public next?: Node<T>;
  public current?: Node<T>;

  constructor() {}

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {}
  get(idx: number): T | undefined {}
  removeAt(idx: number): T | undefined {}
}
