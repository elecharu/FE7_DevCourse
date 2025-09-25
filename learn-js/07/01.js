// 호이스팅 = 선언과 할당을 구분하여 선언을 최상위로 끌어올리는 현상
// console.log(num)
// var num = 10;

// (전역 / 함수) 실행 컨텍스트
// - 자바스크립트 코드가 실행되는 환경
// -- Record Environment
// -- 생성 : 변수나 함수의 같은 선언을 메모리에 기록하는 일
// -= 실행 : 생성 단게에서 기록된 데이터를 바탕으로 코드를 실행하는 일
// -- Outer Environment
// -- -- 자신이 정의가 된 위치의 상위 렉시컬 스코프를 가리킴

// 스코프 : 변수에 접근할 수 있는 유효한 범위
// - 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// - 전역 스코프 : 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
// - 블록 스코프 : 블록 범위 안에서만 접근할 수 있는 유효한 범위 {}
// 스코프 체인 : 함수 스코프에서 값이 존재하지 않아 값을 참조하기 위해 상위에 존재하는 스코프로 이동하여 값을 찾아가는 항위

// var num;
// console.log(num);
// num = 10;

let num = 10;
function a () {
    let num = 20; // 변수 쉐도잉 
    function b() {
        console.log(num)
    }
    b()
}
a();

// 클로저란? = 함수가 선언 될 때의 렉시컬 스코프(=환경)을 기억하고, 그 스코프(= 환경)에 있는 변수에 접근할 수 있는 함수
// 함수 내부에서는 외부의 변수(식별자)를 참조 할 수 있다.
// 함수 외부에서는 내부의 변수(식별자)를 참조 할 수 없다.

function outer() {
    let count = 0;
    function counter() {
        return count++;
    }
    return counter
}

let counter = outer();
console.log(counter())
console.log(counter())
console.log(counter())
counter = null; // 메모리 누수 문제를 해결 하기 위해 꼭 진행해야하는 초기화 

let counter2 = outer();
console.log(counter2())
console.log(counter2())
counter2 = null;