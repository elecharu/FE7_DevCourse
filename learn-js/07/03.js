// 문제 1. 카운터 만들기

function createCounter() {
    let num = 0;
    function counter() {
        return ++num;
    }
    return counter
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 문제 2: 비공식적인 캐싱
function square() {
    let cache = [];
    return function(x) {
        const result = x ** 2
        if(cache[x]) return cache[x]
        cache[x] = result;
        return cache[x]
    };
}

const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25


// 문제 3: 지연 실행
function delayExecution(ms) {
    function delayOutput (fn) {
        setTimeout(fn,ms)
    }
    return delayOutput;
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

// 문제 4: 고유 ID 생성기
function createIdGenerator() {
    // 여기에 코드를 작성하세요
    let _uniqueId = 0;
//     function getId () {
//         return ++_uniqueId;
//     }
//     return getId
    return function getId(){
        return ++_uniqueId;
    }
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2

const getId2 = createIdGenerator();
console.log(getId2()); // 1
console.log(getId()); // 3

// 문제 5: 메모이제이션
function fibonacci() {
    const result = [];
    function fibo(...args){
        const key = JSON.stringify(...args);
        if(result[key]) { console.log(`${result[key]}값 메모이제이션 확인!`); return result[key]};
        result[key] = fiboFunc(key)
        return result[key]
    }
    return fibo
}

function fiboFunc (num) {
    let sum = 0;
    for(let i = 1; i<=num; i++){ sum += i;}
    return sum;
}


const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)
console.log(fibo(5)); 
console.log(fibo(7));
console.log(fibo(5)); // 메모이제이션 사용)
console.log(fibo(10)); // 55 (메모이제이션 사용)


// 문제 6: 문자열 결합
function createStringCombiner() {
    // 여기에 코드를 작성하세요
    let result = '';

    function combiner (...args){
        return result += args
    }
    return combiner;
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// 문제 7: 객체 속성 카운터
function createPropertyCounter() {
    function counter (...args){
        return (Object.keys(args[0]).length)
    }
    return counter
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

// 문제 8: 배열 필터링
function createFilter(condition) {
    let result = [];
    function filterEven (arr) {
        for(let i = 0; i < arr.length; i++){
            if(condition(arr[i]))  result.push(arr[i])
        }
        return result
    }
    return filterEven
}

const filterEven = createFilter(num => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 문제 9: 다중 카운터
function createMultiCounter() {
    let keys = [];
    function counters(str){
        if(!keys[str])  keys[str] = 0;
        return function() {
            return ++keys[str];
        };
    }

    return counters
}

const counters = createMultiCounter();
const counterA = counters('A');
const counterB = counters('B');

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2


// 문제 10: 고차 함수로 커스터마이징된 계산기
function createCalculator(operator) {
    return function caculator(...args) {
        let result = args[0];
        for(let i = 1; i < args.length; i++){
            result = operator(result, args[i])
        }
        return result
    }
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50


// 강사님 프로그래머스 문제 (정답은 맞으나 성능 문제로 인해 실패가 계속 나옴)
function solution(n) {
    const calculator = calculatorFibo(n)
    return calculator();
}

function calculatorFibo(n){
    let result = 0;
    let fiboArr = [0,1]
    return function fibo(){
        for (let i = 2; i < n; i++) {
            fiboArr.push((fiboArr[i-1] + fiboArr[i-2])% 1234567)
        }
        return fiboArr[n-1] + fiboArr[n-2];
    }
}


console.log("결과", solution(3))
console.log("결과", solution(5))



function chunk(arr, size) {
    let result = [];

    if (arr.length === 0 ){
        return result;
    }  
    if (size <= 0 ){
        return arr;
    }

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;

}

const data = [1,2,3,4,5]

const resultData0 = chunk(data, 0)
const resultData1 = chunk(data, 1)
const resultData2 = chunk(data, 2)
const resultData3 = chunk(data, 3)
const resultData4 = chunk(data, 4)
const resultData5 = chunk(data, 5)
const resultData6 = chunk(data, 6)

console.log("Chunk 0 Result = ", resultData0)
console.log("Chunk 1 Result = ", resultData1)
console.log("Chunk 2 Result = ", resultData2)
console.log("Chunk 3 Result = ", resultData3)
console.log("Chunk 4 Result = ", resultData4)
console.log("Chunk 5 Result = ", resultData5)
console.log("Chunk 6 Result = ", resultData6)

const testSize = [1,2,3,4,5,6];
testSize.forEach((size => {
	const result = chunk(data,size);
});