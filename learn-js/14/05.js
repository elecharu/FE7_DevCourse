// Date
// 시간을 밀리초 정밀도(unix epoch : 1970-01-01T00:00:00Z 기준)로 표현하는 객체다
// asia/seoul UTC + 9
// const now = newDate(2025,8,2,10,30,0) // 0 => 1월 8 -> 
// const now = newDate('2025-09-02 14:00:00') // 0 => 1월 8 -> 


// 날짜와 시간을 가져오는 메서드
const now = new Date();
console.log(now)
console.log(now.getFullYear()) // 연
console.log(now.getMonth()) // 월 0 -> 1월
console.log(now.getDate()) // 일 (1 - 31) 
console.log(now.getDay()) // 일 -> 요일(요일 인덱스)을 반환 -> 0(일), 1(월), 2(화), 3(수) ....

console.log(now.getHours()) // 시
console.log(now.getMinutes()) // 분
console.log(now.getSeconds()) // 초

console.log(now.setFullYear(2025));
console.log(now.setMonth(7));
console.log(now.setDate(32));

console.log(now.setHours(9))
console.log(now.setMinutes(12))
console.log(now.setSeconds(12))

console.log(now)

// 날짜와 날짜사이의 간격
const startDate = new Date();
const endDate = new Date(2025,11,25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);
console.log(Math.ceil(diffDays)) // 121.4884850.... -> 122일로 간주하면 되는듯?