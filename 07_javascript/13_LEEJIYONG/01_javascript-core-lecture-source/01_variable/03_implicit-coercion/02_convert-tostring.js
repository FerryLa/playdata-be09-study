// 숫자 타입으로 암묵적 변환

// 1. 산술연산자
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 - '5');
console.log(10 % 'javascript');

// 2. 비교연산자
console.log(10 > '5');
console.log(10 > '20');
// 문자는 모두 NaN으로 변환되기 떄문에 NaN은 비교 연산자를 통해 어떤 값과도 비교 불가능하다.
// 따라서 항상 false를 반환한다.
console.log(`10 > 'a' : ${10 > 'a'}`);

//참고 : NaN끼리 비교 연산자 사용도 불가능하므로 isNaN함수를 이용해서 확인해야한다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`isNaN(NaN) : ${isNaN(NaN)}`);

// 3 +단항 연산자
// 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+''); //0
console.log(+'1'); // 1
console.log(+'javaScript'); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // 0
// console.log(+Symbol());
// TypeError: Cannot convert a Symbol value to a number
console.log(+{});
console.log(+[]);
console.log(+function () { });

// 빈문자열, 빈배열, null, false => 0
// true = 1;
// 객체, undefined, 함수 => NaN
