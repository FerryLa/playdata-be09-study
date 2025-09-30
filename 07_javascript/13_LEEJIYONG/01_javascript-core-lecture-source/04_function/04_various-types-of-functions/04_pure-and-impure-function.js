var cnt = 0;

// 순수 함수는 최소 하나 이상의 인수를 전달 받으며 인수의 불변성을 유지한다.
function increase(n) {
  return ++n;
}

function decrease() {
  return --cnt;
}

decrease();
console.log(cnt);
