// 연습 문제 - 쉬움

//[연습문제 - 1부터 9까지 출력하기]

for (let i = 1; i <= 9 ; i++){
    console.log(i);
}


//[연습문제 - 1부터 9까지의 합 출력하기]
let sum = 0;
for (let i = 1; i <= 9 ; i++){
    sum += i;
}
console.log("1부터 9까지의 총합:", sum)

//[연습문제 - 1부터 100까지 짝수만 출력하기]
for (let i = 1; i <= 100; i++){
    if(i%2 !== 0) continue;
    console.log(i)
}

/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/

let numArr = [10, -10, 20, -30, 40];

// for 반복문
for(let i = 0; i < numArr.length; i++){
    if (numArr[i] < 0) continue;
    console.log(numArr[i])
}

// for of 반복문
for (const value of numArr){
    if (value < 0) continue;
    console.log(value)
}

/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/

for(let i = 1; i<=15; i++){
    if(i % 2 === 0){
        console.log(`${i} 짝수`)
    }else{
        console.log(`${i} 홀수`)
    }
}

// 주어진 숫자 배열의 최댓값 찾기 
const numArr2 = [7, 2, 9, 4, 5];

let maxValue = 0;
for(const value of numArr2){
    if(value > maxValue){
        maxValue = value;
    }
}

console.log(`최댓값 ${maxValue}`)

// 짝수 인덱스의 요소만 새로운 배열 담기
// 배열의 .push() 메서드를 사용하세요.
const arr = ['a', 'b', 'c', 'd', 'e']
let newArr3 = [];
for (const index in arr){
    if(index % 2 === 0) newArr3.push(arr[index])
}
console.log(newArr3)

// 구구단 3단 출력하기

for(let i = 1; i<=100; i++){
    if(i % 3 !== 0) continue;
    console.log("구구단 3단", i)
}