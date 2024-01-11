export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const midPoint = Math.floor(low + (high - low) / 2);
    const currentPoint = haystack[midPoint];
    if (currentPoint === needle) {
      return true;
    } else if (currentPoint > needle) {
      high = midPoint;
    } else {
      low = midPoint + 1;
    }
  }

  return false;
}
