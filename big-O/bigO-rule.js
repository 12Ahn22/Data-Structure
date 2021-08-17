// 계수 법칙 - 상수는 지우자
function a (n){
  // 5n의 시간복잡도를 가진다.
  // 계수법칙에 의해 5를 제거한다
  let count = 0;
  // O(n)
  for(let i=0;i<5*n;i++){
    count++;
  }
  count;
}

// 합의 법칙 - 시간 복잡도는 더할 수 있다
function b (n){
  let count = 0;
  // 5n
  for(let i=0;i<5*n;i++){
    count++;
  }
  // n
  for(let i=0;i<n;i++){
    count++;
  }
  // 둘의 시간 복잡도를 합친다 -> 6n
  // 계수 법칙으로 상수제거
  // O(n)
  return count;
}

// 곱의 법칙 - 시간 복잡도는 곱할 수 있다.
function c (n){
  let count = 0;
  // 5n
  for(let i=0;i<5*n;i++){
    count++;
      // n
    for(let i=0;i<n;i++){
    count++;
    }
  }
  // 5n안에 n이 반복된다. 중첩 -> 5n * n = 5n^2
  // 계수 법칙 => O(n^2)
  return count;
}

// 다항 법칙 - 빅오의 k승
// 중첩을 파악해서 표기법의 다항을 결정하기
function d(n){
  let count = 0;
  // n이 중첩되어 발생한다 => n^2
  // O(n^2)
  for(let i=0;i<n*n;i++){
    count++;
  }
  return count;
}


