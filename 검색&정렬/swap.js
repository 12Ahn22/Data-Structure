// 두 수를 바꾸는 함수
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6 방식
// export default swap;
module.exports = swap;
