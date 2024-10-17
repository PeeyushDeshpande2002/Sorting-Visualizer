export function quickSort(array, updateArray, speed) {
  let arr = array.slice();

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        updateArray(arr.slice());
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    updateArray(arr.slice());
    return i + 1;
  }

  function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);

      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    }
  }

  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}
