function Student(){} // Student.protoptype = {constructor : Student}

console.log(Student.prototype.constructor); // 자기 자신을 가리킴킴
console.log(Student.prototype.constructor == Student);


let student = new Student(); // { constructor : Student} 상속 받음
console.log(student.constructor);
console.log(student.constructor == Student);

// 개발자가 특별히 할당하지 않아도 모든 함수는 기본적으로 "prototype" 프로퍼티를 갖는다.
// 디폴트 프로퍼티 "prototype"은 constructor 프로퍼티 하나만 있는 객체를 가리키는 데,
// 여기서 constructor 프로퍼티는 함수 자신을 가리킨다.