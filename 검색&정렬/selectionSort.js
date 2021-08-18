const swap = require('./swap');

function selectionSort(arr) {
  const length = arr.length - 1;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length + 1; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

console.log(selectionSort([6, 3, 2, 4, 8, 5, 7, 1]));
