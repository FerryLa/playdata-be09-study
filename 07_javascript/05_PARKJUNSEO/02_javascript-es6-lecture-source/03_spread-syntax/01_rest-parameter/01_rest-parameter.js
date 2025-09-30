// 나머지 매개변수(...)
function merge(msg1, msg2) {
  return msg1 + msg2;
}

console.log(merge("안녕하세요.")); // undefined 발생
console.log(merge("안녕하세요.", " 반갑습니다.")); // 정상 작동
console.log(merge("안녕하세요.", " 반갑습니다.", "제 이름은 박준서입니다.")); // 마지막 매개변수는 무시함

// 나머지 매개변수를 활용해서 변경
function mergeAll(...args) {
  let msg = "";
  for (let arg of args) {
    msg += arg;
  }
  return msg;
}

console.log(mergeAll("안녕하세요."));
console.log(mergeAll("안녕하세요.", "반갑습니다."));
console.log(mergeAll("안녕하세요.", "반갑습니다.", "제 이름은 박준서입니다."));
