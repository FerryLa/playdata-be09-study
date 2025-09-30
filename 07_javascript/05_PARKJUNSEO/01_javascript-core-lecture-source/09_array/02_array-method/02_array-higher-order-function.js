// 배열 고차 함수

// Array.prototype.sort
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(`정렬 전 numbers : ${numbers}`);
numbers.sort(); // 정렬(오름차순) -> 원본에 영향을 줌
console.log(`정렬 후 numbers : ${numbers}`); // 문제는, 문자열 기준 정렬이기 때문에 9가 89 뒤로 감
console.log(`=======================================`);

// sort의 기본 정렬은 문자열 정렬이므로 필요하다면 정렬기준을 콜백함수로 전달해야 함
numbers.sort((a, b) => a - b);
console.log(`숫자 오름차순 정렬 후 numbers : ${numbers}`);
numbers.sort((a, b) => b - a);
console.log(`숫자 내림차순 정렬 후 : ${numbers}`);
console.log(`=======================================`);

// Array.prototype.forEach : for문을 대체하는 고차함수
numbers = [1, 2, 3, 4, 5];
numbers.forEach((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});
numbers.forEach((item) => console.log(item * 10));
console.log(`=======================================`);

// Array.prototype.map : 배열 요소 전체를 대상으로 콜백함수 호출 후의 반환 값들로 구성된 새로운 배열 생성
const types = [true, 1, "text"].map((item) => typeof item);
console.log(types);

const lengths = ["apple", "banana", "cat", "dog", "egg"].map(
  (item) => item.length
);
console.log(lengths);
console.log(`=======================================`);

// Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소로만 구성된 배열 생성
const odds = numbers.filter((item) => item % 2); // 홀수만 출력 (나머지가 1 => true이므로)
console.log(odds); // 1, 3, 5
console.log(`=======================================`);

// Array.prototype.reduce
// : 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환
numbers.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`previousValue : ${previousValue}`); // 이전 값
  console.log(`currentValue : ${currentValue}`); // 현재 순회하고 있는 값
  console.log(`currentIndex : ${currentIndex}`); // 현재 순회하고 있는 인덱스
  console.log(`array : ${array}`);
  return currentValue; // 이게 없으면 previousValue가 undefined가 뜸
});
console.log(`=======================================`);

// 합산
const sum = numbers.reduce((pre, cur) => pre + cur);
console.log(`sum : ${sum}`);
console.log(`=======================================`);

// 최대값
const max = numbers.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(`max : ${max}`);
console.log(`=======================================`);

// Array.prototype.some : 배열 내 일부 요소가 콜백함수의 테스트를 통과하는지 확인 -> 그 결과를 boolean으로 반환
// 배열 내 10보다 큰 값이 1개 이상 존재하는지 확인
let result = [1, 5, 3, 2, 4].some((item) => item > 10);
console.log(`result : ${result}`);
console.log(`=======================================`);

// 배열 내 3보다 큰 값이 1개 이상 존재하는지 확인
result = [1, 5, 3, 2, 4].some((item) => item > 3);
console.log(`result : ${result}`);
console.log(`=======================================`);

// Array.prototype.every : 배열 내 모든 요소가 콜백 함수의 테스트를 통과하는지 확인하며 그 결과를 boolean으로 반환
// 배열 내 모든 값이 3보다 큰지 확인
result = [1, 5, 3, 2, 4].every((item) => item > 3);
console.log(`result : ${result}`);
console.log(`=======================================`);

// 배열 내 모든 값이 10보다 작은지 확인
result = [1, 5, 3, 2, 4].every((item) => item < 10);
console.log(`result : ${result}`);
console.log(`=======================================`);

// Array.prototype.find: : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가
// 참인 첫번째 요소를 반환 // 참인 요소가 존재하지 않는다면 undefined를 반환
// Array.prototype.findIndex: 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참
// 인 첫번째 요소의 인덱스를 반환 참인 요소가 존재하지 않는다면 -1을 반환

const student = [
  { name: "유관순", score: 90 },
  { name: "홍길동", score: 80 },
  { name: "장보고", score: 70 },
];

// 이름이 홍길동인 학생 찾기
result = student.find((item) => item.name === "홍길동");
console.log("result : ", result);
result = student.findIndex((item) => item.name === "홍길동");
console.log("result : ", result);

result = student.filter((item) => item.score >= 80);
console.log("result :", result);
