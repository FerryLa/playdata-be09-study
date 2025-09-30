// 비교 연산자
// 동등 비교 (==, !=): 암묵적 타입 변환을 통해 타입 일치 시킨 후 같은 값인지 비교
// 일치 비교 (===, !==): 타입과 같이 모두 일치하는 비교

//숫자1, 문자 '1', 논리값 true비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == '1' : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 == '1' : ${1 === true}`);

// 숫자 0, 문자 '0', 논리값 false, 빈 문자열 ''비교
console.log(`0 == '-' : ${0 == '0'}`);
console.log(`1 == false : ${0 == false}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === false : ${1 === false}`);
console.log(`0 === '' : ${1 === ''}`);

// null과 undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);


// NaN은 자신과 일치하지 않은 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);
console.log(`Number.isNaN(NaN) : ${isNaN(NaN)}`);

// 비교연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다.
console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);

// 크기 비교 연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);
console.log(`'apple' < 'banana' : ${'apple' > 'banana'}`);

