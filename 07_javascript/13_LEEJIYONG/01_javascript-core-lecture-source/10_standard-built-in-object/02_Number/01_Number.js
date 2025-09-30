// Number

/* Number 생성자 함수 */
const obj = new Number(); // Number 인스턴스 생성
console.log(obj); // 인수 전달하지 않을 경우 0을 할당
const obj2 = new Number(1);
console.log(obj2); // 인수로 전달 받은 숫자 할당
const obj3 = new Number("1");
console.log(obj3); // 인수로 전달 받은 문자 숫자로 형변환
const obj4 = new Number("number");
console.log(obj4); // 숫자 형변환 불가 시 NaN

// Number.NaN 숫자가 아님을 나타내는 숫자값
console.log(Number.NaN); // NaN

// Number.EPSILON 부동 소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다
console.log(Number.EPSILON); // 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다
console.log(0.1 + 0.2); // 부동소수점 표현은 2진법으로 변환했을 때 무한소수가 되어 미세한 오차가 발생할수 밖에 없다
console.log(0.1 + 0.2 === 0.3); // false
console.log(isEqual(0.1 + 0.2, 0.3)); // true
function isEqual(a, b) {
  // a - b의 절대값이 Number.EPSILON 보다 작으면 같은 수로 인정한다
  return Math.abs(a - b) < Number.EPSILON;
}
