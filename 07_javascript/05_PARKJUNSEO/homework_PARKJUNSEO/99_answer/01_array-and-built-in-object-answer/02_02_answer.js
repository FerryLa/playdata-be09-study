// 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와
// 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

   const past = (Date.parse(now) - Date.parse(today))/1000
   return `${past}` + "초나 흘렀습니다. 시간을 소중히 씁시다^^"
}

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

   const restSec = (Date.parse(tomorrow) - Date.parse(now))/1000
   return `${restSec}` + "초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^"
}

console.log(getSecondsToday()); // xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
console.log(getSecondsToTomorrow()); // xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^
