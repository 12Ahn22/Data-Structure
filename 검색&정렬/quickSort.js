class QuickSort {
  sort(arr) {
    const array = [...arr];

    // 배열의 크기가 1보다 작다면 리턴 = 전부 쪼개져있고 합치면 된다.
    if (array.length <= 1) return array;

    const leftArray = [];
    const rightArray = [];

    const pivotElement = array.shift(); // 가장 앞에 있는 요소를 기준점 값으로 삼는다.
    const centerArray = [pivotElement]; // 기준점이 된 요소는 가운데에 위치한다.

    // 배열을 쪼갠다
    while (array.length) {
      // 현재 배열의 첫번째 요소를 꺼낸다.
      const currentElement = array.shift();

      // 기준점 값과 비교한다
      if (currentElement > pivotElement) {
        // 크다면 오른쪽 배열에 넣는다
        rightArray.push(currentElement);
      } else if (currentElement < pivotElement) {
        // 작다면 왼쪽 배열에 넣는다
        leftArray.push(currentElement);
      } else {
        // 같다면 센터에넣는다
        centerArray.push(currentElement);
      }
    }
    //  왼쪽과 오른쪽 배열 모두 정렬한다
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // 정렬한 배열을 모두 합치고 반환한다.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}

const test = new QuickSort();
console.log(test.sort([11, 2, 3, 4, 7, 1, 10, 5]));
