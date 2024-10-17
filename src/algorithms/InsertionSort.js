export function insertionSort(array, updateArray, speed) {
  let arr = array.slice();

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;

      // Visualize the step
      setTimeout(() => updateArray(arr.slice()), i * speed + j * speed);
    }

    arr[j + 1] = key;
    setTimeout(() => updateArray(arr.slice()), i * speed);
  }

  return arr;
}
