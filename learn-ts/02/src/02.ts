// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function(n : 매개변수 타입) : 반환값의 타입 ()
// void (함수의 반환값에 사용되는 타입)
// never
{
    function sum(n1: number, n2: number) {
        return n1 + n2 // number
    }

    sum(10, 20);

    function concat(str1: string, str2: string) {
        return str1 + str2; // string
    }

    concat("HELLO", "WORLD!")

    // 반환값이 없음을 의미
    // 어떤 함수가 값을 돌려주지 않고 단순히 실행만 할 때.
    // 예: 로그 출력, 변수 수정, 알림 전송 등 "부수 효과(side effect)"만 있는 경우
    function printValue(value: string): void {
        console.log(value)
    }

    printValue("Hello")

    // 정상적으로는 절대 반환될 수 없는 함수를 의미
    // 함수가 예외를 던지고, 정상적인 반환이 절대 없는 경우 등....
    function throwError(msg: string): never {
        throw new Error(msg)
    }
}

{
    // 함수 표현식
    // (1) - 함수 표현식의 타입을 지정하는 방법
    const sum = function sum(n1: number, n2: number) {
        return n1 + n2 // number
    }

    sum(10, 20)

    // (2) - 변수에다가 함수 타입을 지정하는 방법
    const sum2: (n1: number, n2: number) => number = function sum(n1, n2) {
        return n1 + n2 // number
    }

    // (3) - 둘 다 하는 방법
    const sum3: (n1: number, n2: number) => number = function sum(n1: number, n2: number) {
        return n1 + n2 // number
    }

}
{
    // 화살표 함수
    // (1) - 함수 표현식의 타입을 지정하는 방법
    const sum = (n1: number, n2: number): number => {
        return n1 + n2 // number
    }

    sum(10, 20)

    // (2) - 변수에다가 함수 타입을 지정하는 방법
    const sum2: (n1: number, n2: number) => number = (n1, n2) => {
        return n1 + n2 // number
    }

    // (3) - 둘 다 하는 방법
    const sum3: (n1: number, n2: number) => number = (n1: number, n2: number): number => {
        return n1 + n2 // number
    }
}

{
    // 매개변수가 콜백함수 일 때
    function log(msg: string) {
        console.log(msg)
    }

    function printValue(callback: (msg: string) => void) {
        callback("HELLO")
    }

    printValue(log)

    const createMultiplier: (factor: number) => (num: number) => number = function createMultiple(factor) {
        return (num) => num * factor;
    }

    const multiplyByTwo = createMultiplier(2);
    console.log(multiplyByTwo(5))
}

{
    function sum(...numArr: number[]) {
        return numArr.reduce((acc, cur) => acc + cur, 0)
    }

    console.log(sum(1, 2, 3, 4, 5))
}

{
    // 함수 오버로딩
    // 오버로드 시그니처를 활용해서 매개변수와 반한값의 경우의 수를 좁히는 방법
    function sum(a: number, b: number): number;
    function sum(a: string, b: string): string;
    function sum(a: number, b: string): string;
    function sum(a: string, b: number): string;
    function sum(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number') return a + b;
        else return `${a}${b}`
    }

    const num = sum(10, 20)
    if (typeof num === 'number') console.log(num.toFixed(2));

    const str = sum("A", "B");

}