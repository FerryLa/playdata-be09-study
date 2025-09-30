// [[Prototype]]
const user = {
  activate: true,
  login: function () {
    console.log(`로그인이 되었습니다.`);
  },
};

const student = {
  passion: true,
};

student.__proto__ = user; // __proto__는 [[Prototype]]의 getter, setter

// student의 프로토타입은 user입니다.
// student는 user를 상속받는다.
console.log(student.passion);
console.log(student.activate);
student.login();

console.log(`=============================`);

// 프로토타입 체인
const ohgiraffersStudent = {
  class: 2,
  __proto__: student,
};
console.log(ohgiraffersStudent.passion);
console.log(ohgiraffersStudent.activate);
ohgiraffersStudent.login();
