//1번 문제, 학점 계산기

let grade = 90;

if(grade >= 90){
    console.log("점수 A");
}else if(grade >= 80){
    console.log("점수 B");
}else if(grade >= 70){
    console.log("점수 C");
}else if(grade >= 60){
    console.log("점수 D");
}else {
    console.log("점수 F");
}

// 2번 문제, 짝수 홀수 판별

let num = 81;

if(num % 2 === 0){
    console.log("Even")
} else {
    console.log("Odd")
}

// 3번 문제, 로그인 확인 및 권한 부여
let isLoggedIn = true;
let isAdmin = false;

if(isLoggedIn){
    if(isAdmin){
        console.log('Welcome, admin!')
    } else {
        console.log('Access Denied')
    }
} else {
    console.log("Please Log in")
}

// 4번 문제, 숫자 크기 비교
let a = 7;
let b = 5;

if(a>b) {
    console.log("a is greater")
} else if(a === b){
    console.log("a and b are equal")
} else {
    console.log("b is greater")
}

// 5번 문제, 월별 계절 판별
let month = 6;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
}

// 6번 문제, 할인율 계산
let charge = 15000;

if( charge >= 100000){
    console.log("20% 할인")
} else if(charge >= 50000){
    console.log("10% 할인")
} else {
    console.log("할인 제외 대상")
}

// 7번 문제, 요일 출력 문제
const day = 4;

switch(day){
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
    case 7:
        console.log("일요일");
        break;
}

// 8번 문제, 양수, 음수, 0인지 판별하는 코드 작성
const num2 = -5;

if(num2 >= 1){
    console.log("양수")
} else if (num === 0){
    console.log("0")
} else {
    console.log("음수")
}