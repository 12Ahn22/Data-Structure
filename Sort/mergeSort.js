const arr = [7, 4, 5, 2, 6, 3, 8, 1];
// mergeSort
// 1. 왼쪽을 정렬
// 2. 오른쪽을 정렬
// 3. 합친다. = merge

// 쪼갠 배열을 합치는 함수
const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // 두 배열의 첫 번째 값들 비교
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 위에서 비교 후, 한쪽에 남아있는 값을 결과 배열에 넣어준다.
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

// 재귀를 하는 부분
const mergeSort = (array) => {
  // 배열의 길이가 하나인 경우
  if (array.length < 2) return array;

  let pivot = Math.floor(array.length / 2); // 중간 인덱스
  // slice는 (시작, 마지막 인덱스)=> 배열에 마지막 인덱스는 포함 안한다
  let left = array.slice(0, pivot); // 쪼갠 왼쪽 배열
  let right = array.slice(pivot, array.length); // 쪼갠 오른쪽

  // merge로 합쳐준다.
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(arr));
