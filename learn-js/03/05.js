// 연습 문제 - 아려움

// 1. 피보나치 수열 계산
let n = 10;
let problem1Result = [];

for (let i = 0; i < n; i++) {
    if (i === 0) {
        problem1Result.push(0);
    } else if (i === 1) {
        problem1Result.push(1);
    } else {
        problem1Result.push(problem1Result[i - 1] + problem1Result[i - 2]);
    }
}

console.log(`피보나치 수열(${n}항):`, problem1Result);


// 2. 소수 찾기
let start = 1, end = 100; // 범위
let problem2Result= [];

for (let i = start; i <= end; i++){
    if (i < 2) continue;

    let isPrime = true;
    for (let j = 2; j< i; j++){
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        problem2Result.push(i)
    }

}

console.log("소수 찾기", problem2Result);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25]; // 배열
let results = 0;
for (const value of numbers){
    results += value;
}
console.log("배열 요소의 합 구하기:", results);


// 4. 문자열 뒤집기
const str = "Hello, World!";
let arrStr = []

for(let i=0; i<= str.length-1; i++){
    arrStr.push(str[i]);
}
arrStr.reverse();

let result = '';
arrStr.forEach(element => {
    result += element;
});

console.log("뒤집힌 문자열:", result); // "!dlroW ,olleH"

// 더 쉬운 풀이 
// const result2 = str.split('').reverse().join('');
// console.log("뒤집힌 문자열:", result2); // "!dlroW ,olleH"


// 5. 특정 숫자까지의 곱 계산
let problem5Result = 4; // 예시 숫자
let factorial = 1;
for (let i = 1; i <= problem5Result; i++){
    factorial *= i;
}
console.log(`${problem5Result}의 팩토리얼:`, factorial); // 5기준 출력 120


// 6. 암스트롱수 
let problem6Result = []; 
for(let i = 100; i<= 999; i++){
    let sum = 0;
    for (let j = 0; j < i.toString().length; j++){
        sum += Number(i.toString().split('')[j] ** 3);
        if( i === sum){
            problem6Result.push(i)
            break;
        }
    }
}

console.log("암스트롱수:", problem6Result)