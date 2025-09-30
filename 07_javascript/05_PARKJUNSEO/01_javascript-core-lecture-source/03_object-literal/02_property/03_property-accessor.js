// 프로퍼티 접근
var dog = {
    name: "밥풀이",
    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
}

// 1. 마침표 표기법 (dot notation)
console.log(`dog.name >>> ${dog.name}`);
dog.eat('닭가슴살');

// 2. 대괄호 표기법 (square bracket notation)
console.log(`dog['name'] >>> ${dog['name']}`);
dog['eat']('닭가슴살')
// dog[eat]('닭가슴살') => 얘는 오류남. 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용


// 프로퍼티 키가 식별자 규칙을 준수하지 않을 경우 대괄호 표기법을 사용
var obj = {
    'dash-key' : 'dash-value',
    0 : 1,
}

// console.log(`obj.dash-key >>> ${obj.dash-key}`);    // 특수기호 때문에 (식별자 규칙 위반) 오류남
// console.log(`obj.dash-key >>> ${obj.'dash-key'}`);  // ''로 감싸도 안됨
// console.log(`obj.dash-key >>> ${obj[dash-key]}`);   // 프로퍼티를 ''로 감싸야 함
console.log(`obj.dash-key >>> ${obj['dash-key']}`);    // 대괄호 표기법을 통해서만 접근이 가능함

console.log(obj[0]);    // 저절로 문자열로 인식하기 때문에 가능함 (따옴표 없이도)
console.log(obj['0']);