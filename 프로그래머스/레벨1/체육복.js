
solution(5,[2,4],[2,3,5]);

function solution(n, lost, reserve) {

  // 여분이 있는 학생이 도둑 맞았을 때는 여분이 있기 때문에 lost에서 제거해준다.
  // 필터는 테스트를 통과한 값을 배열로 저장한다.
  // indexOf()가 -1은 존재하지 않는다는 의미 = 여분이 없다. => lost에 남아있어야한다.
  let lost2 = lost.filter(i => reserve.indexOf(i) === -1).sort((a, b) => a - b);
  // 여분을 도둑맞았으니 여분 배열에서도 제거해줘야한다.
  let reserve2 = reserve.filter(i => lost.indexOf(i) === -1).sort((a, b) => a - b);

  let cnt = 0; // 체육복을 빌려받은 사람
  for(let i = 0; i < lost2.length; i++){
      for(let j = 0; j < reserve2.length; j++){
        // reserve2의 값이 0이면 이미 빌려준 상태 = 여분 없음
          if(reserve2[j] === 0){
              continue;
          }
          else if(lost2[i] === reserve2[j] - 1 || lost2[i] === reserve2[j] + 1){
              lost2[i] = 0;
              reserve2[j] = 0;
              cnt++;
          }
      }
}
  cnt = lost2.length - cnt; // 도둑맞은 사람 - 체육복을 빌려받은 사람 
  return n - cnt; // 전체 학생 수 - 체육복을 못빌린 사람
}