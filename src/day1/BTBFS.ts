// BREADTH FIRST SEARCH
// Go into each row of the three and check all values there - use a QUEUE
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const traverseQueue: (BinaryNode<number> | null)[] = [head];

  while (traverseQueue.length) {
    const current = traverseQueue.shift() as BinaryNode<number> | null;
    if (!current) continue;

    if (current.value === needle) {
      return true;
    }

    traverseQueue.push(current.left);
    traverseQueue.push(current.right);
  }

  return false;
}
