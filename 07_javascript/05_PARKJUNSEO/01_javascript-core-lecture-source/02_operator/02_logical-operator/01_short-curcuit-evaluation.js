// 단축평가
// 표현식을 평가하는 도중 평가 결과가 확정되는 경우 나머지 평가 과정을 생략
// &&, || 연산자 표현식의 결과가 때로는 boolean 값이 아닐 수도 있다.

console.log("apple" || "banana"); // apple (apple에서 단축평가가 일어났고, true인 apple을 반환함)
console.log("" || "banana"); // banana
console.log("apple" && "banana"); // banana (해당 식의 논리값을 결정한 banana가 나옴)
console.log("" && "banana"); // '' (해당 식의 논리값을 결정한 ''(공백)이 나옴)

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
// 프로퍼티를 참조할 때 단축 평가를 활용할 수 있다.
var obj = null;

// var val = obj.value;
var val2 = obj && obj.value;
// 논리값을 결정한 (false) obj가 나옴. 근데 obj는 null임. 오류는 안 나지만 값은 없음.

/* 중요! */
// 이런 식으로 값이 있는지 없는지 확인하고 싶은 것이 있을 때 앞에 두고 && 연산자를 써서 뒤로 넘어가는지 아닌지 확인할 수 있음
// truthy값이면 뒤로 넘어가서, 뒤의 값이 나옴 (var2 = obj.value)
// falsy값이면 뒤로 넘어가지 못함 (var2 = obj)
