// JavaScript는 동적 타입 언어이다.
// => 데이터 타입을 사전에 선언하지 않는다.
// => 변수 선언이 아니라 할당에 의해 타입이 결정되며
//    재할당에 의해 동적으로 변수의 타입이 변화할 수 있다.
var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = `lg twins`;
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test); // 자바스크립트의 첫 번째 버전에 나온 오류인데, 수정 안됨. 주의 (object로 뜸)

test = Symbol();
console.log(typeof test);

test = {}; // 객체
console.log(typeof test);

test = []; // 배열
console.log(typeof test);

test = function () {}; // 함수
console.log(typeof test); // function(object의 한 종류)
