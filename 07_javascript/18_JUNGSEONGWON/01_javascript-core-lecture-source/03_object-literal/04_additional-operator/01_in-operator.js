// in연산자 : 프로퍼티의 존재여부를 확인할 때 사용

var student = {
    name: '유관순',
    age: 16,
    test: undefined
};
console.log(student.name === undefined);
console.log(student.age === undefined);
console.log(student.test === undefined); 
console.log(`-----------------------------------------`);
console.log("name" in student);
console.log("age" in student);
console.log("test" in student);
console.log("test2" in student);
