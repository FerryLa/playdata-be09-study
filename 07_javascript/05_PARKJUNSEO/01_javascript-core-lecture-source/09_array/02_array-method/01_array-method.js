// 배열 메소드
const arr = [];

// 배열의 생성자 함수는 Array
console.log(arr.constructor === Array);

// 배열의 프로토타입 객체는 Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// Array.prototype.indexOf
// indexOf : 배열에서 요소가 위치한 인덱스를 리턴
// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 반환
// includes : 배열에 해당 요소 포함 여부 리턴

const foodList = ["물회", "삼계탕", "냉면", "수박", "물회"];
console.log(foodList);

console.log(`foodList.indexOf('물회') : ${foodList.indexOf("물회")}`); // 0 -> 기본적으로 앞에 있는 요소를 반환
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf("물회", 1)}`); // 4 -> 그 다음 것에 대한 요소를 찾기
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf("삼겹살")}`); // -1

console.log(`======================================================`);

console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf("물회")}`); // 4
console.log(
  `foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf("물회", 1)}`
); // 0
console.log(
  `foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf("삼겹살")}`
); // -1

console.log(`======================================================`);

console.log(`foodList.includes('물회') : ${foodList.includes("물회")}`); // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes("삼겹살")}`); // false

// Array.prototype.push : 배열의 맨 뒤에 요소 추가
// Array.prototype.pop : 배열의 맨 뒤에 요소 제거
const chineseFood = ["짜장면", "짬뽕", "우동"];
console.log(`push 전 chineseFood : ${chineseFood}`);
chineseFood.push("탕수육");
chineseFood.push("깐풍기");
console.log(`push 후 chineseFood : ${chineseFood}`);

console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(chineseFood);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열의 맨 앞 요소 제거 후 반환
const chickenList = ["후라이드", "양념", "간장", "파닭"];
console.log(`unshift 전 chikenList : ${chickenList}`);
chickenList.unshift("마늘");
chickenList.unshift("뿌링클", "고추바사삭");
console.log(`unshift 후 chikenList : ${chickenList}`);
console.log(`========================================`);
console.log(`shift 전 chikenList : ${chickenList}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`shift 후 chikenList : ${chickenList}`);

console.log(`========================================`);
// Array.prototype.concat : 두 개 이상의 배열을 결합 (새로운 주소값 생성)
const idol1 = ["에스파", "엑소"];
const idol2 = ["레드벨벳", "BTS"];
const idol3 = ["아이유", "빅뱅"];

const mix = idol1.concat(idol2);
const mix2 = idol3.concat(idol1, idol2);
console.log(`idol1 기준으로 idol2 배열을 concat : ${mix}`);
console.log(`idol3 기준으로 idol1, idol2 배열을 concat : ${mix2}`);
console.log(`idol1 === mix : ${idol1 === mix}`);

// Array.prototype.slice : 배열의 요소 선택 잘라내기 (슬라이싱)
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ["HTML", "CSS", "JavaScript", "JQuery"];

// slice(시작 인덱스, 종료 인덱스)  // 시작 인덱스부터 종료 인덱스 -1 까지    // 슬라이싱
console.log(`front.slice(1, 3): ${front.slice(1, 3)}`); // 1번째 인덱스부터 2번째 인덱스까지
console.log(`front.slice(1): ${front.slice(1)}`); // 끝 점이 없을 때는 끝까지
console.log(`front : ${front}`); // 원본은 안 건듦

// splice(index, 제거수, 추가값1, 추가값2...)
console.log(
  `front.splice(3, 1, "React") : ${front.splice(2, 2, "React", "Java")}`
);
console.log(`front : ${front}`);

// Array.prototpye.join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕", "초콜릿", "껌", "과자"];
console.log(`snackList.join() : ${snackList.join()}`); // default는 , 임
console.log(`snackList.join() : ${snackList.join("/")}`);

// Array.prototype.reverse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse() : ${[1, 2, 3, 4, 5].reverse()}`);
