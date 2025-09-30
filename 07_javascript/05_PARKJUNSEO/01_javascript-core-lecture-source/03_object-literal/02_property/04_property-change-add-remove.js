// 프로퍼티 수정, 추가, 삭제

var dog = {
    name : '밥풀이',
};

console.log(dog);

dog.name = '두부';      // 이미 존재하는 프로퍼티의 값을 변경할 수 있음
console.log(dog);       

dog.age = 5;            // 존재하지 않는 프로퍼티 값을 동적으로 추가할 수 있음
console.log(dog);       

delete dog.age;         // 프로퍼티 삭제 가능
console.log(dog);       

delete dog.something;   // delete 연산자는 객체의 프로퍼티를 삭제하고, 존재하지 않는 프로퍼티를 삭제 시도하면 그냥 무시함
console.log(dog);    


