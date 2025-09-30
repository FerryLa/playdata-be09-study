// const
// let 키워드에서 알아본 특징을 모두 가지고 있으며, 상수 선언에서 사용된다는 점이 다른 점이다.

// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다. (이후 재할당 불가능)
const x = 1;

// 재할당이 금지된다.
// x = 100; // let은 재할당 가능

const student = {
  name: "홍길동",
  age: 15,
};

student.name = "유관순"; // 객체의 프로퍼티(속성) 값을 변경하는 것은 가능함
student.test = "테스트"; // 새로운 프로퍼티 값을 추가하는 것도 가능함
console.log(student);

// student = {}  // 이런 게 불가능함
