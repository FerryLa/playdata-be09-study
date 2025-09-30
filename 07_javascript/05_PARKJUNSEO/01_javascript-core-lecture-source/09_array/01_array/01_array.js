// 배열 생성

// 1. 리터럴로 생성
const arr = ["바나나", "복숭아", "키위"];
console.log(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

const arr3 = new Array(10); // 이렇게 하면 [10]가 아닌 크기 10짜리 방이 되지만, 더 넣으면 알아서 늘어남
console.log(arr3);

const arr4 = new Array(1, 2, 3);
console.log(arr4);

const arr5 = [10]; // [10]
console.log(arr5);

// 3. Array.of 메소드
console.log(Array.of(10)); // [10]
console.log(Array.of(1, 2, 3));
console.log(Array.of("hello", "js"));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용한다.
console.log(arr[0]);
console.log(arr[1]);

// 배열 요소의 개수 (배열의 길이)를 나타내는 length 프로퍼티
console.log(arr.length);

// for문을 이용한 요소 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열은 별도의 타입이 존재하지 않으며, 객체 타입이다.
console.log(typeof arr); // Object

const obj = {};
console.log(obj.length); // undefined

const arrr = [];
console.log(arrr.length); // 0
