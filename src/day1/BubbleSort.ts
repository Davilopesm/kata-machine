export default function bubble_sort(arr: number[]): void {
  // Bubble sort is a in memory sort (in place algo), no need to copy array everything happens in this one
  // O(nSQUARED) - Always runs minus one lenght of N
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
