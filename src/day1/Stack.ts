interface Node<T> {
  value: T;
  prev?: Node<T>;
}

export default class Stack<T> {
  public length: number;
  // A stack head is the last item in the stack which is always first consumed
  public head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode = { value: item } as Node<T>;
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.prev = this.head;
    this.head = newNode;
  }
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    const previousHead = this.head as Node<T>;

    if (!this.length) {
      this.head = undefined;
      return previousHead?.value;
    }

    this.head = previousHead.prev;
    return previousHead.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
