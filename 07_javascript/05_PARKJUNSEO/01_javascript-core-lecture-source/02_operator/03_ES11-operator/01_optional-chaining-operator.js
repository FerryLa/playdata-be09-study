// 옵셔널 체이닝 연산자
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var obj = null;
var val = obj?.value;   // undefined가 뜨면 값이 없다는 뜻
console.log(`val : `, val);

// 단축평가를 이용하면 빈문자열과 같은 falsy값을 false로 취급하는 문제가 생기고, 이렇게 되면 아무것도 뜨지 않음
var str = '';
var len = str && str.length;
console.log(`len >`, len);


// 이런 방식으로 빈 문자열과 같은 것에 대한 내용도 확인할 수 있음
var len2 = str?.length;
console.log(`len2 >`, len2);

var len3 = str?.value;
console.log(`len3 >`, len3);
