interface Node<T> {
  value: T;
  next?: Node<T>;
}

export default class Queue<T> {
  public length: number;
  public head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode = { value: item } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.tail = this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  deque(): T | undefined {
    if (!this.head) {
      this.tail = undefined;
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = head.next;

    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
