// ES6에서 var키워드의 단점을 보완하기 위해 let,const를 도입했다.

// 1. 변수 중복 선언 금지
let msg = "안녕하세요"
// let msg = "안녕히가세요."
console.log(msg);

//  2. 블록 레벨 스코프
let i = 0;
for (let i = 0; i < 10; i++){ }
// 지역변수인 경우이고 전역 변수로 하고 싶은 경우는 let i = 0을 지워주면 된다. 이떄 ;~하면서 내용은 이어야 한다.
console.log(i);

//  3. 변수의 호이스팅
console.log(x);
let x; // 오류 발생(x가 초기화 되지 않은 상태라는 오류가 뜬다.)
