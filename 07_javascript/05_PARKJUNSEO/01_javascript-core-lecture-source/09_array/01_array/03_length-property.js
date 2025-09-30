// length property는 요소의 개수를 나타내는 0이상의 정수값을 가진다.
console.log([].length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// length property 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6); // 요소 추가
console.log(arr);
console.log(arr.length);

arr.pop(); // 요소 삭제
console.log(arr);

// 요소 길이 변경 (lenth property에 임의의 값을 명시적으로 할당할 수 있다.)
arr.length = 3; // 뒤에 꺼 다 잘림 (아예 없어짐. 값이 3개만 남음)
console.log(arr);
console.log(arr.length);

arr.length = 10;
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

arr[2] = 1; // 요소 변경
console.log(arr);

// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소배열을 허용함
const sparse = [, 2, , 4];
console.log(sparse);
console.log(sparse.length);
console.log(Object.getOwnPropertyDescriptors(sparse));

sparse[2] = 3;
console.log(sparse);

// 객체에서 프로퍼티를 순회한다 >>> for in

// key값 순회 (length property를 미포함)
for (let key in arr) {
  console.log(key);
}

console.log("=======================");

// value값 순회 (length만큼 반복 진행)
for (let item of arr) {
  // [1, 2, 1]
  console.log(item);
}
