// Number property
// Number.MAX_VALUE : 자바스크립트에서 표현할 수 있는 가장 큰 양수 값
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // 무한대가 크다

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE > 0); // 0보다 크다

// Number.MAX_SAFE_INTEGER : 자바 스크립트에서 안전하게 표현할 수 있는 가장 큰 정수 값
// Number.MIN_SAFE_INTEGER : 자바 스크립트에서 안전하게 표현할 수 있는 가장 작은 정수 값
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

//Number.POSITIVE_INFINITY 양의 무한대를 나타내는 숫자값 Infinity와 같다
//Number.NEGATIVE_INFINITY 음의 무한대를 나타내는 숫자값 -Infinity와 같다
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
