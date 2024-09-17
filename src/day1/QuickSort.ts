// quickSort - does recursion
function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(arr, low, high);
  // call array for all minus the one I check
  qs(arr, low, pivotIndex - 1);
  // call array for all plus the one I did not check
  qs(arr, pivotIndex + 1, high);
}

// partition func
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let idx = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

export default function quick_sort(arr: number[]): void {
  // Sorting in place
  // Select pivot, partition the other elements into two sub-arrays based on whether they are less than or greater than the pivot
  // Recursively sorting the sub - arrays
  qs(arr, 0, arr.length - 1);
}
