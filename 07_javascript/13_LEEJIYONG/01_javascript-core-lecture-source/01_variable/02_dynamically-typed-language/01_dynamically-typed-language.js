//javaScript는 동적 타입 언어이다.
// => 데이터타입을 사전에 선언하지 않는다.
// => 변수 선언이 아니라 할당에 의해 타입이 결졍되며
// 재할당에 의해 동적으로 변수의 타입이 변화할 수 있다.

var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = "dfsaf";
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(test);

test = Symbol();
console.log(typeof test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function () { };
console.log(typeof test);




