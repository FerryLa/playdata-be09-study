var string; // 변수 선언
string = "JavaScript";
string = "JavaScript";
string = `JavaScript`; // 백틱(`)

console.log("string :", string);

var str = `만나서 반갑습니다.
LG 오지환입니다.
안타 날라갑니다. 준비됐습니까.
다시 한 번 말씀드립니다. LG 오지환입니다.
안타 날라갑니다. 준비됐습니까.`; // 백틱을 사용하면 이렇게 줄바꿈 가능함 ("" or ''은 불가능)
console.log(str);

var lastName = "오";
var firstName = "지환";
console.log("제 이름은 " + lastName + firstName, "입니다.");
console.log(`제 이름은 ${lastName}${firstName}입니다.`);
