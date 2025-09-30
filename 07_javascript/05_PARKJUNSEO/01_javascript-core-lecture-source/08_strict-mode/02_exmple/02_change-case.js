// 변화 상황

// 1. 일반 함수의 this
// 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문에
// strict mode에서는 함수를 일반함수로 호출하면 this에 undefined가 바인딩된다.

(function () {
  "use strict";
  function test() {
    console.log(this); // 여기서 this는 전역을 가리킴
  }
  test(); // 엄격모드를 사용하면 undefined가 됨
  new test(); // 생성자함수이기 때문에 엄격모드에서도 잘 작동함
})();

// 2. arguments 객체
// 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function (x) {
  "use strict"; // 엄격모드를 적용하면 x는 2가 아닌 1이 됨
  x = 2;
  console.log(arguments);
})(1);
