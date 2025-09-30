// 일반적인 배열과의 차이점

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// (요소들의 값들을 확인하는 구문문)


// 자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로
// 모든 값이 배열의 요소가 될 수 있다.
const arr = [
  "홍길동",
  20,
  true,
  null,
  undefined,
  [],
  {},
  function(){}
];

console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr));