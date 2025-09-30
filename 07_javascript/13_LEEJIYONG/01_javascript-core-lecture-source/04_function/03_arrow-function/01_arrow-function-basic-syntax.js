// 화살표 함수 기본 문법
// ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표를 사용해 보다
// 간략하게 함수를 선언하는 방법이다.
// 항상 익명함수로 선언하며 본문이 한줄인 함수를 작성할 때 유용하다.

// 기본 function 정의
var message = function () {
  return `hello world`;
};

console.log(message());

message = () => {
  return "Arrow Function";
};

console.log(message());

// 명령문이 하나인 경우 중괄호 생략 가능
message = () => "ArrowFunction2";
console.log(message());

// 매개변수가 있는 경우
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message("Function", "!!!"));

// 매개변수가 하나라ㅏ면 소괄호 생략할 수 있다. 단 없거나 여러개면 생략 불가능하다.
message = (val) => "Arrow" + val;
console.log(message("Function~"));
