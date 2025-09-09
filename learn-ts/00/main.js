
// @ts-check

// type {number}


// 이렇게 중복 선언 오류가 발생하는 이유는
// main.ts 파일에 이미 num이라는 변수가 선언되어있어
// 해당 파일에서도 중복 선언 되었다고 오류가 발생 (ts-check)
let num = 'Hello'