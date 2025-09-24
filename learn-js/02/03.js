// 03 1. 복합대입연산자 연습
// 변수 `x`에 숫자 20을 할당하세요.
// 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.

let x = 20;
console.log( x += 10);
console.log( x -= 5);
console.log( x /= 2);
console.log( x *= 3);
console.log( x %= 2);


// 숫자비교

let fisrtProblem = 0;

console.log(fisrtProblem > 0 ? "Positive" : fisrtProblem === 0 ? "Zero" : "Negative")

// 최댓값 찾기

let a = 55;
let b = 88;
let c = 42;

// console.log(a > b && a > c ? "a" : a > b && a < c ? "c" : a < b && b > c ? "b" : a < b && b < c ? "c" : null);
console.log(a > b && a > c ? "A" :  a < b && b > c ? "B" : "C");

// a가 b보다 클 경우 c 보다도 클 경우 가장 큰 최대값은 A
// a가 b보다 작고 b가 c 보다 클 경우 가장 큰 최댓값은 B
// a가 b보다 작고 c 보다도 작고 c가 b보다 클 경우 c가 최댓값 
// 즉 나머지는 C로 처리하면 된다


// 짝수 홀수 확인
let number = 22;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 로그인 확인
let isLoggedIn = false;
console.log(isLoggedIn === true ? "Welcome" : "Please Log in")

// 성인 확인
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor")