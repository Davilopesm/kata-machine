interface Node<T> {
  value: T;
  next?: Node<T>;
}

export default class SinglyLinkedList<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const newNode: Node<T> = { value: item };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.length++;
    if (!this.tail) {
      this.tail = this.head;
      this.head.next = this.head;
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }
  insertAt(item: T, idx: number): void {}
  append(item: T): void {
    const newNode = { value: item };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.length++;
    if (!this.tail) {
      this.head.next = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  remove(item: T): T | undefined {
    let foundNode = this.head;
    if (!foundNode || !this.length) {
      return undefined;
    }
    let previous;

    for (let i = 0; i <= this.length; i++) {
      if (foundNode.value === item) {
        break;
      }

      if (!foundNode.next) {
        return undefined;
      }

      previous = foundNode;
      foundNode = foundNode.next;
    }

    if (!previous) {
      this.head = foundNode.next;
      this.length--;
      return foundNode.value;
    }

    if (!foundNode.next) {
      previous.next = undefined;
      this.length--;
      return;
    }

    previous.next = foundNode.next;
    foundNode.next = undefined;
    this.length--;

    return foundNode.value;
  }
  get(idx: number): T | undefined {
    let foundNode = this.head;
    if (!foundNode || !this.length) {
      return undefined;
    }
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        return foundNode?.value;
      }
      if (!foundNode || !foundNode.next) {
        return undefined;
      }
      foundNode = foundNode.next;
    }
    return undefined;
  }
  removeAt(idx: number): T | undefined {
    let foundNode = this.head;
    if (!foundNode || !this.length) {
      return undefined;
    }
    let previous;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        break;
      }
      if (!foundNode.next) {
        return undefined;
      }
      previous = foundNode;
      foundNode = foundNode.next;
    }

    if (!previous) {
      this.head = foundNode.next;
      this.length--;
      return foundNode.value;
    }

    if (!foundNode.next) {
      previous.next = undefined;
      this.length--;
      return;
    }

    previous.next = foundNode.next;
    foundNode.next = undefined;
    this.length--;

    return foundNode.value;
  }
}
