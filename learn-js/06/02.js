// 함수를 매개변수로 받아서 사용하는 함수
// 콜백 함수 (Callback Function)
function greet(fn) {
    console.log(fn("Sungsoo"))
}

greet(function (name) {
    return `Hello, ${name}`;
})

// 화살표 함수
greet ((name) => `Hello, ${name}`);

// 콜백 함수 예제1
function sayHello(callback) {
    callback("안녕하세요!");
}
sayHello(console.log)

// 콜백 함수 예제2
function calculator(callback){
    return () => callback(10, 20);
}

const cb = calculator((num1, num2) => num1 + num2);
console.log(cb)
calculator((num1, num2) => num1 - num2);
calculator((num1, num2) => num1 * num2);

// 예제 3
setTimeout(() => {
    console.log("1초 뒤 실행 됨")
},1000)

// // 예제4
// function makeGreeter(name){
//     return () => `안녕! ${name}`;
// }

// 예제4의 화살표 함수 버전
const makeGreeter = (name) => () => `안녕! ${name}`
const greetJohn  = makeGreeter("John");
console.log(greetJohn)

// function getOperation(op){
    
// }
// const add = getOperation("add");
// console.log(add(5,3));
// const minus = getOperation("sucoding");
// console.log(minus(5,3));
