export function mergeSort(array, updateArray, speed) {
  let arr = array.slice();

  function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let i = 0; i < n2; i++) R[i] = arr[m + 1 + i];

    let i = 0,
      j = 0,
      k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      updateArray(arr.slice());
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      updateArray(arr.slice());
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      updateArray(arr.slice());
    }
  }

  function mergeSortHelper(arr, l, r) {
    if (l >= r) return;

    let m = l + Math.floor((r - l) / 2);

    mergeSortHelper(arr, l, m);
    mergeSortHelper(arr, m + 1, r);
    merge(arr, l, m, r);
  }

  mergeSortHelper(arr, 0, arr.length - 1);
  return arr;
}
