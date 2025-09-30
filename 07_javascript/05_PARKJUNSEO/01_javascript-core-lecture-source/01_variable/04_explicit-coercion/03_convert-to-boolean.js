// 논리 타입으로 명시적 변환

// 1.Boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('LG TWINS'));   // true
console.log(Boolean(''));    // false
console.log(Boolean(' '));  // true
console.log(Boolean(0));    // false
console.log(Boolean('0'));  // true
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true // 빈 객체여도 true
console.log(Boolean([])); // 빈 배열이어도 true
console.log('-----------------------------------------------------------------');

// 2. ! 부정 논리연산자를 두 번 사용하는 방법
console.log(!'JavaScript'); // false
console.log(!!'JavaScript'); // true
console.log(!!''); // false
console.log(!!1); // true
console.log(!!(0));    // false
console.log(!!('0'));  // true
console.log(!!(null)); // false
console.log(!!(NaN)); // false
console.log(!!(Infinity)); // true
console.log(!!(undefined)); // false
console.log(!!({})); // true // 빈 객체여도 true
console.log(!!([])); // 빈 배열이어도 true




