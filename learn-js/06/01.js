// 함수는 일급 객체이다.
// 일급 객체라는 것은 객체의 한 종류
// 모든 일급 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수 있는건 아니다.

// 일급 객체란 정확히 무엇인가?
// 변수나 데이터 구조 안에 담을 수 있고, 함수의 인자(argument)로 전달할 수 있으며, 함수의 반환값(return value)으로도 사용할 수 있는 객체

// 일급 객체의 필수 조건
// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다.
// 2. 함수의 인자로 전달할 수 있어야 한다.
// 3. 함수의 반환 값으로 사용할 수 있어야 한다.
// 4. 런타임에 생성할 수 있어야 한다.
// 5. 프로퍼티(속성)을 가질 수 있어야 한다.


// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다.
const sayHello = function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello("World"))

// 2. 함수의 인자로 전달할 수 있어야 한다.

function greet(fn){
    console.log(fn("World!"));
}
greet(sayHello)

// 3. 함수의 반환 값으로 사용할 수 있어야 한다.
function multiplier(factor) {
    return function(num) {
        return num * factor; // 10
    }
}
const double = multiplier(2);
console.log(double(5))

// 4. 런타임에 생성할 수 있어야 한다.
const dynamicFn = new Function("a", "b", "return a + b");

// 자바스크립트에서 변환
// function dynamicFn(a, b){
//     return a + b;
// }

console.log(dynamicFn(3,4)) // 7

// 5. 프로퍼티(속성)을 가질 수 있어야 한다.
sayHello.lang = "korea";
console.log(sayHello.lang);