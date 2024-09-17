export default function two_crystal_balls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  // Jump based on square root to bring O to O(sqrt(N))
  for (i; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // If broke means that item is behind / I need to return one square hoot here
  // So i needs to receive its value minus one square root, so I can go back and look where the item was
  i -= jumpAmount;
  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
