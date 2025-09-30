// 반환문
function hello(name) {
  // 반환문
  return `${name}님 안녕하세요?`;
  console.log(name); // return문(반환문) 이후의 코드는 실행되지 않고 무시됨
}

console.log(hello("유관순"));

// 반환값이 없는 함수
function func() {
  console.log(`함수가 호출되었습니다.`);
  // 반환 값이 없는 경우 return 구문 생략 가능하며 undefined가 반환된다.
  return; // 반환 값이 명시적으로 작성되지 않은 경우도 undefined가 반환된다.
}

func();
console.log(func()); // return이 없는 함수를 출력하면 뒤에 undefined가 붙어옴
