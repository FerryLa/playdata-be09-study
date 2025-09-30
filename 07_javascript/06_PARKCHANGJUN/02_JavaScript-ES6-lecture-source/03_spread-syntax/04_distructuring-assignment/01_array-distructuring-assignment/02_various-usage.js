// 다양한 사용법

// 1. 객체 프로퍼티에서 사용하기
const user = {}; // 리터럴 생성
// user.firstNmae = "길동";
// user.lastName = "홍";
[user.firstName, user.lastName] = "Gwansoon Yu".split(" ");
console.log(user);

console.log("=====================================");
// 2. 변수 교환 용도로 사용하기
let student = "학생";
let teacher = "선생님";
[student, teacher] = [teacher, student];
console.log(`student : ${student}, teacher : ${teacher}`);

console.log("=====================================");
// 3. rest parameter(...)와 함께 사용하기
const [sign1, sign2, ...rest] = ["양자리", "황소자리", "쌍둥이자리", "게자리"];
console.log(sign1);
console.log(sign2);
console.log(rest);

console.log("=====================================");
// 4. 기본값 설정하고 사용하기
const [firstName = "아무개", lastName = "김"] = ["길동"];
console.log(firstName); // 배열에서 구조 분해 할당 된 값
console.log(lastName); // 기본 값
