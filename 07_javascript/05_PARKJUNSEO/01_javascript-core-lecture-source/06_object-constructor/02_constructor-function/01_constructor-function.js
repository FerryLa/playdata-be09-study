// 생성자 함수

const student = {
  name: "유관순",
  age: 15,
  getInfo: function () {
    return `${this.name}(은)는 ${this.age}세입니다.`;
  },
};

const student2 = {
  name: "김창수",
  age: 35,
  getInfo: function () {
    return `${this.name}(은)는 ${this.age}세입니다.`;
  },
};

// 생성자 함수 정의 (DTO 느낌)
function Student(name, age) {
  (this.name = name),
    (this.age = age),
    (this.getInfo = function () {
      return `${this.name}(은)는 ${this.age}세입니다.`;
    });
}

// 인스턴스의 생성
const student3 = new Student("이도", 27);
console.log(student3);
console.log(student3.getInfo());
