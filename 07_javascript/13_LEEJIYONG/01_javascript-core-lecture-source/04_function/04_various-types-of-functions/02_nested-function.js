// 중첩 함수
// 함수 내부에 저으이된 함수를 중첩함수 또는 내부 함수라고 한다.
// 중첩함수를 포함하는 함수를 외부 함수라고 한다.
// 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼 함수의 역할을 한다.

function outer() {
  var outerVal = "외부함수변수";
  function inner() {
    var innerVal = "내부 함수 변수";
    // 외부 함수의 변수를 내부 함수에 참조할 수 있따.
    console.log(`outerVal : ${outerVal}, innerVal : ${innerVal}`);
  }

  inner();
}

// var student = {
//   name: "유관순",
//   getInfo: function (age) {
//     return `${name} ${age}`;
//   },
// };
outer();
