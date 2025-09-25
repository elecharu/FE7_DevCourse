console.log( typeof {}); // object
console.log( Array.from ({}));

// 1.표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경 시키지 않을 때

const fruits = ['사과', '바나나']

for( let i = 0; i< fruits.length; i++){
    console.log(fruits.shift());
}

const numbers = [1,2,3]
const doubled = numbers.map((v) => v + v);
console.log(doubled)

const numbers2 = [1,2,3,4,5] 
const evens = numbers2.filter((v) => v % 2 == 0 ); // 안에 값이 true, false로 구분되는데 true인것만 return 해줌
console.log(evens) // [2,4]

// 누산 작업 할 때 사용
const number3 = [1,2,3,4];
const sum = number3.reduce((acc, cur) => acc + cur , 0 )
console.log(sum)