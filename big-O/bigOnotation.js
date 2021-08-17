// O(n)
function linear(n){
  for(let i = 0; i< n ; i++){
    console.log(i);
  }
}
linear(3);
console.log('==================');
// O(n^2)
// for문이 깊어질 수록 ^승의 숫자가 증가한다.
function quadratic(n){
  for(let i = 0; i< n ; i++){
    console.log(i);
    for(let j = 0; j<n; j++){
      console.log(j)
    }
  }
}
quadratic(2);
console.log('==================');
// O(log N)
// 갈수록 입력이 2배씩 작아진다 -> log2(입력값)
// 갈수록 입력이 n배씩 작아진다 -> log N
function logarithmic(n){
  for(let i = 2; i <= n; i = i*2){
    console.log(i);
  }
}
logarithmic(10000);