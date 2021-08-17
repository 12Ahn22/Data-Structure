var reverse = function (x) {
  // 부호 저장하기
  let sign = 1;
  if (x < 0) sign = -1;

  // 절대값으로 부호 없애기
  let x2 = Math.abs(x);

  let result = ''; // 문자열
  while (x2 !== 0) {
    result = result + (x2 % 10); // 문자열은 더하기를 하면 오른쪽으로 숫자가 붙는다.
    x2 = parseInt(x2 / 10); // 몫이 x2가 된다
  }
  // 문제 잘 읽기
  if (Number(result) > 2 ** 31) return 0;
  return Number(result) * sign;
};

reverse(123);
