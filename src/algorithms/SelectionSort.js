export function selectionSort(array, updateArray, speed) {
  const n = array.length;
  let arr = array.slice();

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];

      // Visualize the step
      setTimeout(() => updateArray(arr.slice()), i * speed);
    }
  }

  return arr;
}
