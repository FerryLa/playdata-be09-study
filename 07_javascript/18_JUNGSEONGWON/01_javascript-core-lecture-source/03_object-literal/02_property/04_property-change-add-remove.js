// 프로퍼티 수정 추가 삭제

var dog = {
    name : '뽀삐',

};
console.log(dog);

dog.name = '두부'
console.log(dog); // 이미 존재하는 프로퍼티에 값을 할당하면 값이 갱신된다.

// dog.age = 3;
dog['age'] = 3;
console.log(dog); // 존재 하지 않는 프로퍼티에 값을 할당하면 동적으로 추가된다.

delete dog.age;
console.log(dog);

delete dog.something; // delete 연사자는 객체의 프로퍼티를 삭제하고, 존재하지 않는 프로퍼티 일 경우 무시를 한다.
console.log(dog);