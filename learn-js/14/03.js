// Set
// 중복되지 않은 값들의 집합을 저장하는 자바스크립트 내장 객체
// 같은 값을 여러번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

// 1. add() = 값 추가 메서드
// 2. delete(value) = 값 삭제
// 3. has(value) = 값 존재
// 4. clear() = 값 비우기 (셋을 비운다)

const set = new Set([1,2,3,4]);
set.add(1)
set.add('kim')
set.add({ age : 20})

console.log(set)

const user = { name : 'kim'}
const userAge = { age: 20}
set.add(user)
set.add(userAge)

console.log(set)

// Set 객체는 중복을 허용하지 않기 때문에 중복되지 않는 값들을 구할 때 많이 사용 (알고리즘 테스트 and 실무에서)
const numArr = [1,2,1,2,3];
const copyNumArr = [...new Set(numArr)];
console.log(copyNumArr)

for ( const value of set) {
    console.log(value)
}