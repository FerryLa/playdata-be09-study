// 메서드 단축
var dog = {
  name: "밥풀이",
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
  },
};

// function 이름 (food) {}

// 메서드 단축 예시
var dog2 = {
  name: "밥풀이",
  eat(food) {
    console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
  },
};

dog.eat("고구마");
dog2.eat("불닭");
