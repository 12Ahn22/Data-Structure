const title = document.getElementById('title');
// 콜백 함수 안에 넣어서 메모리 누수를 막기
// const subtitle = document.getElementById('subtitle');

title.addEventListener('click', () => {
  const subtitle = document.getElementById('subtitle');
  subtitle.remove();
  console.log(subtitle); // 메모리 누수를 막지않으면 삭제 했는데도 계속해서 출력된다.
});
// 또는 이벤트 핸들러를 지워주는 방법도 있다.
// title.removeEventListener('click');
