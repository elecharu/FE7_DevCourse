// 01 문제
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
function plusFunction(...args) {
  return args.reduce((sum, value) => sum + value, 0)
}

console.log("매개변수 더하기", plusFunction(5, 7 , -3))


function sum(...numbers){
    let sum = 0;
    for (const value of numbers){
        sum += value;
    }
    return sum
}
console.log("매개변수 더하기", sum(5, 7 , -3))


// 02 문제
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.

function calculatorNumber (num1, num2) {
    return num1+num2;
}

console.log(calculatorNumber(5,12))


function calculatorNumber2 (num1, num2) {
    return num1-num2;
}

console.log(calculatorNumber2(5,12))


function calculatorNumber3 (num1, num2) {
    return num1*num2;
}

console.log(calculatorNumber3(5,12))


function calculatorNumber4 (num1, num2) {
    return num1/num2;
}

console.log(calculatorNumber4(5,12))


// 짝수와 홀수 판별하기
function checkNumber (arg) {
  if (arg % 2 === 0) return true;
  else return false;
}

console.log("짝수 홀수 판별", checkNumber(4))

// 배열의 모든 요소 더하기
function sumArray (args) {
    let sum = 0;
    for (const num of args){
        sum += num;
    }

    return sum;
}

console.log("배열 모든 요소 총합", sumArray([1, 2, 3])); // 6

// 배열의 최대값 찾기
function findMax (args) {
    let max = 0;
    for (const num of args){
        if ( num > max) max = num;
    }
    return max;
}

console.log("최대값 찾기", findMax([1, 15, 3, 9, 2])); // 19

// 문자열 반전
function reverseString (text) {
    let result = '';
    for ( let i = text.length -1; i >= 0; i--){
        result += text[i];
    }
    return result
}

console.log("문자 뒤집기", reverseString("hello")); // "olleh"


// 문자열에서 특정 문자 개수 세기
function countCharacter (text , findText) {
    let count = 0;
    for ( let i = 0; i <= text.length -1; i++){
        if(text[i] === findText) {count += 1;}
    }
    return count;
}
console.log("문자열에서 특정 문자 개수 찾기", countCharacter("banana", "a")); // 3

// 감사님 버전
const countCharac = (str,char) => {
    console.log(str.split(char).length-1)
};
console.log("문자열에서 특정 문자 개수 찾기", countCharac("banana", "a")); // 3

// 팩토리얼 계산하기
function factorial (num) {
    let sum = 1;
    for(let i = 1; i<= num; i++){
        sum *= i;
    }
    return sum
}
console.log("팩토리얼", factorial(4)); // 3

// 강사님의 재귀 함수 버전
function facto (num){
    if(num === 1) return 1;
    return num * facto(num-1);
}
console.log("강사님 재귀함수 팩토리얼 ", facto(4));


//삼각형 넓이 계산하기
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.

let width = 10;
let height = 5;

function calculatorTriangle (width, height) {
    return (width *height)/2; 
}

console.log("삼각형 넓이:", calculatorTriangle(width, height))