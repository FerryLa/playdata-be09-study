// 프로퍼티 수정, 추가, 삭제
var dog = {
    name: '뽀삐',

}

console.log(dog);
dog.name = '두부'; // 이미 존재하는 프로퍼티에 값을 할당하면 값이 갱신된다.
console.log(dog)

//dog.age = 20;
dog['age'] = 30;
console.log(dog); // 존재하지 않는 프로퍼티에 값을 할당하면 동적으로 추가된다.

delete dog.age;
console.log(dog);

// delete 연산자는 객체의 프로퍼티를 삭제하며, 존재하지 않는 프로퍼티는 삭제 시 무시 된다.
delete dog.something;
console.log(dog);

