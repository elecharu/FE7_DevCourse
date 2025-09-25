function compressString(string) {
    let result = ''
    let count = 1;

    for ( let i = 0; i < string.length; i++){
        if(string[i] !== string[i+1]){
            result += string[i] + count
            count = 1;
        } else{
            count++
        }
    }

    return result
}

console.log(compressString("aaabbcccbbaa"))


// let num; // 선언
// num = 10 // 할당
// let num = 10+20; // 초기화 (선언+할당)

// 호이스팅이란?
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올리는 현상

console.log(num)
var num = 10;

// 출력
// undefined 

// 이유
// 해당 변수가 선언은 됐지만 할당 및 초기화는 되지 않아 undefined가 출력이 된다.

// var, let, const는 전부 호이스팅이 지원이 되지만
// var는 undefined로 초기화가 진행이 되지만
// let, const는 초기화가 되지 않아 선언 전 참조 시 Reference Error가 발생합니다. (참조 오류)
// 즉 선언전 사용 가능한 호이스팅 변수는 var, 선언전 사용 불가능한 변수 let, const

// 함수 호이스팅 종류

// 1. 함수 선언문
console.log(sayHello()); // "Hello!" (에러 없음)

function sayHello() {
    return "Hello!";
}

// 2. 함수 표현식
console.log(sayHi()); // TypeError: sayHi is not a function

var sayHi = function() {
    return "Hi!";
};

// 3. 화살표 함수
console.log(sayBye()); // ReferenceError (let/const 사용 시)

const sayBye = () => {
    return "Bye!";
};