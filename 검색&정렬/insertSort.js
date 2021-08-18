// 삽입 정렬

function insertSort(arr) {
  const length = arr.length;
  let j;
  for (let i = 0; i < length; i++) {
    let value = arr[i]; // 현재 요소값

    // j는 정렬된 배열, i번째의 바로 뒤 인덱스까지
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      // 현재 arr[j]가 value보다 크면 삽입해야한다.
      // j--를 하고 계속 뒤에 정렬된 값들 확인
      arr[j + 1] = arr[j];
    }
    // 제대로 정렬 한 후, i인덱스 값을 j+1위치에 넣어줌
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertSort([6, 1, 23, 4, 2, 3]));
