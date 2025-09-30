// 자바스크립트의 함수는 객체이다.
// 함수는 값으로 취급할 수 있고, 프로퍼티 값으로 사용할 수 있다.
var dog = {
  name: "밥풀이",
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
  },
}; // this는 생성됐을 당시의 주소값을 가지고 있음

console.log(dog.name);
dog.eat();
dog.eat("뼈해장국");
