// in연산자 : 프로퍼티의 존재 여부를 확인할 때 사용

var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

console.log(student.name === undefined);    // false
console.log(student.age === undefined);     // false
console.log(student.test === undefined);    // true (프로퍼티는 존재하지만 정의되지는 않은 상태)
console.log(student.test1 === undefined);   // true (이 프로퍼티는 존재도 안하지만, 정의되지 않은 것도 맞음. 이런 혼란이 발생)
console.log(`--------------------------------------------------------------------------`);
console.log("name" in student);
console.log("age" in student);
console.log("test" in student);
console.log("test1" in student);
