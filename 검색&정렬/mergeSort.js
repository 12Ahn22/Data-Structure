// 머지 솔트
// 배열을 계속 쪼갠다. 한 개가 남을 때 까지
// 다 쪼갠 배열 요소를 비교해서 정렬
// 정렬되면 다시 위로 올라가서 쪼개진 배열과 정렬...

function mergeSort(arr) {
  // 재귀를 멈추는 조건 = 배열이 다 쪼개진 상황
  if (arr.length <= 1) return arr;

  // 배열을 절반으로 쪼갠다
  const middleIdx = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIdx); // 마지막 값 포함 X
  const rightArray = arr.slice(middleIdx, arr.length);

  // 쪼개진 배열도 계속 쪼갠다.
  const leftArraySorted = mergeSort(leftArray);
  const rightArraySorted = mergeSort(rightArray);

  // 위에서 배열이 전부 쪼개져야 여기가 실행된다.
  // 쪼개진 배열을 합친다.
  return mergeSortedArrays(leftArraySorted, rightArraySorted);
}

function mergeSortedArrays(leftArray, rightArray) {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  // 오른쪽 왼쪽 배열 요소 하나하나를 다 비교해서 작은 값을 push
  // true && false => false
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let minElement = null;

    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      minElement = leftArray[leftIndex];
      leftIndex += 1;
    } else {
      minElement = rightArray[rightIndex];
      rightIndex += 1;
    }
    // 두 배열을 비교하고 작은 값을 정렬된 배열에 넣어준다.
    sortedArray.push(minElement);
  }
  // concat을 하는 이유 = 양쪽 배열에서 남은 값들을 가져다 붙인다.
  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

const test = [11, 2, 3, 4, 7, 1, 10, 5];

console.log(mergeSort(test));
