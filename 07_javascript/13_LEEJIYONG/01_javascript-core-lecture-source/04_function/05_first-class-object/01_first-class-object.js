// 일급 객체
// 1. 무명의 리터럴로 생성할 수 있따. 즉 런타임에 로딩된다
// 2. 변수나 자료구조 (객체, 배열 등)에 저장할 수 있다.
var hello = function () {
  return "안녕!";
};

var obj = { hello };

function repeat(func, count) {
  for (var i = 0; i < count; i++) {
    console.log(func());
  }
}

var run = repeat(obj.hello, 10);
run();
