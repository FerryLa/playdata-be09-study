// ES6에서 var키워드의 단점을 보완하기 위해 let, const를 도입했음

// 1. 변수의 중복 선언 금지
let msg = "안녕하세요";
console.log(msg);
// let msg = "안녕히가세요";  // 오류 발생

// 2. 블록 레벨 스코프
let i = 0;
for (let i = 0; i < 10; i++) {}
// i = 23; // let은 const와 달리 재할당 가능함
console.log(i); // var i 였다면 10이 나왔을 거임

// 3. 변수 호이스팅
// console.log(x);
// var x; // 이렇게 하면 변수 호이스팅이 발생하여 출력이 가능했음
// let x; // 이렇게 하면 초기화가 안되어서 출력이 안된다고 뜸 (let과 var의 차이점)
