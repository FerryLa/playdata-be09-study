// 제시된 숫자값 배열과 문자값 배열을 오름차순 정렬, 내림차순 정렬하여 출력한다. (힌트 : sort)

let numbers = [20, 100, 37, 54, 88, 9];
let strings = ["wow", "js", "party", "hello"];

// 1.
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

// 2.
console.log(strings.sort());
console.log(strings.sort().reverse());

// ===================
// [ 9, 20, 37, 54, 88, 100 ]
// [ 100, 88, 54, 37, 20, 9 ]
// [ 'hello', 'js', 'party', 'wow' ]
// [ 'wow', 'party', 'js', 'hello' ]
