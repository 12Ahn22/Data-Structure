function binarySearch(arr, n) {
  let lowIndex = 0,
    highIndex = arr.length - 1;
  // 멈추는 조건
  while (lowIndex <= highIndex) {
    let middle = Math.floor((highIndex + lowIndex) / 2);
    if (arr[middle] === n) {
      return middle;
    } else if (n > arr[middle]) {
      lowIndex = middle + 1;
    } else {
      highIndex = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 3));
