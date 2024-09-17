function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  walk(curr.right, path);

  path.push(curr.value);

  return path;
}

// Depth first traversal on a three
// POST ORDER visit all nodes first

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
