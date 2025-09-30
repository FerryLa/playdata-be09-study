// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체임.
// 각각의 메모리 공간이 동일한 크기를 갖지 않아도 연속적으로 이어져 있지 않아도 됨

// 일반적인 배열과의 차이점

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

// 자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로
// 모든 값이 배열의 요소가 될 수 있다.
const arr = ["홍길동", 20, true, null, undefined, [], {}, function () {}];
console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr));
