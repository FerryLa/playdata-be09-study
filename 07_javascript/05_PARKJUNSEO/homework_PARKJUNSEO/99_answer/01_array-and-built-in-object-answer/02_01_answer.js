// 연, 월, 일을 전달하면 해당 날짜의 요일을
// '월', '화', '수', '목', '금', '토', '일' 문자열로 반환해주는 함수 getWeekDay를 만든다.

function getWeekDay(year, month, date) {
  const weekDay = new Date (year, month-1, date)
  const dayArr = ['일', '월','화', '수', '목', '금', '토', '일']
  return dayArr[weekDay.getDay()];
}

console.log(getWeekDay(2022, 6, 21)); // 화
console.log(getWeekDay(2022, 12, 12)); // 월
