// 논리 타입으로 암묵적 변환
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값)
// 또는 Falsy(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환이 된다.

if (undefined) console.log("if(undefined)"); // false
if (null) console.log("if(null)"); // false
if (0) console.log("if(0)"); // false
if (1) console.log("if(1)"); // true
if (NaN) console.log("if(NaN)"); // false
if ("") console.log(`if('')`); // false
if ("l") console.log("if(`l`)");

// 결론 : undefined, null, 0, NaN, ''(빈 문자열)은 Falsy한 값이몌,
//       이외의 모든 값들은 Truthy값이다.
