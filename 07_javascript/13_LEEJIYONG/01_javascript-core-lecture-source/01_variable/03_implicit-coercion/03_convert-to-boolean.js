// 논리 타입으로 암묵적 변환
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값)
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
// 결론 : undefined, null, 0, NaN, ''(빈문자열)dms Falsy한 값이ㅕㅁ,
//      이외의 모든 값들은 Truthy값이다.
if (undefined) console.log('if(undefined');
if (null) console.log('if(null)');
if (NaN) console.log('if(NaN)');
if (0) console.log('if(0)');
if (1) console.log('if(1)');
if ('') console.log('if(\'\')');
if ('javascript') console.log(`if('javacript')`);