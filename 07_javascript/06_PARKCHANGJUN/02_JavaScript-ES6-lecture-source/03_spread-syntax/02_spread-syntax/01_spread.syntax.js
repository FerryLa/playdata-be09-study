// 스프레드 문법(전개문법)
const arr = [10, 20, 30];
console.log(`가장 큰 값 : ${Math.max(10, 20, 30)}`);
console.log(`가장 큰 값 : ${Math.max(arr)}`);
// 스프레드 문법을 사용하면 arr이 인수 목록으로 확장되어 최대 값을 알아올 수 있다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);

console.log("===============================================");
const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];
console.log(...arr1);
console.log(`가장 큰 값 : ${Math.max(...arr1, ...arr2)}`); //배열 객체 여러개 전달 가능
console.log(`가장 큰 값 : ${Math.max(0, ...arr1, 5, ...arr2)}`); //일반 값과 혼합해서 사용 가능

// concat 메소드보다 간결하게 배열 병합에 사용 가능
const merged = [0, ...arr1, ...arr2];
console.log(merged);

// 문자열을 배열로 변환
const str = "JavaScript"
console.log([...str]);