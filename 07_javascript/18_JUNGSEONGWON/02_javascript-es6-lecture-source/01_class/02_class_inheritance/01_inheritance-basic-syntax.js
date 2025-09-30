class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight) {
    this.weight += foodWeight;
    console.log(
      `${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`
    );
  }
}

class Human extends Animal {
  develop(language) {
    console.log(`'${this.name}(은)는 ${language}로 개발합니다. 정말 즐겁..'`);
  }
}

let human = new Human("수강생",70) // Animal에서 상속 받아서 몸무게를 가지고 왔다.
human.eat(1)

human.develop("JavaScript")