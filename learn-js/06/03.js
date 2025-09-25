// 콜백함수 + 실행컨텍스트
// 전역 실행컨텍스트

// ❗ 실행 컨택스트 = 자바스크립트 코드가 실행되는 환경
// ❗ 전역 실행컨텍스트 (필수) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경 (오로지 단 1개만 존재)
// ❗ 함수 실행컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경

// 
var num = 10;
console.log(num);

function print() {
    console.log("print") // 함수 실행컨텍스트
}

print(); // 전역 실행컨텍스트

// Record Environment
// 생성 -> a = function
// 실행 -> a();

// 스코프 : 변수에 접근할 수 있는 유효한 범위
// 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// 전역 스코프 : 어디서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위

// 함수 내부에서는 외부의 변수를 참조할 수 있고
// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

// TDZ(Temporal Dead Zone), 일시적 사각 지대 = let, const 변수가 선언은 되었지만 초기화가 안된 상태이기에 접근할 수 없는 구간 (Reference Error 발생)
// 변수 쉐도잉(variable Shadowing)


const a = function a() {
    console.log("a");
    function b() {
        console.log("b")
    }
    b();
}

a();
console.log("c")

// 사용하지 않는 메모리를 회수하는 것 = 가비지 컬렉션
// 카비지 컬렉션을 하기 위해 사용되는 도구 = 가비지 컬렉터

const num2 = 10;
function a2 () {
    function b2(){
        console.log(num2)
    }
    b2()
}
a2()
