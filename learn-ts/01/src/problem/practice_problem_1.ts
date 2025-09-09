// ### 1. **문제: 문자열 변수 선언**

// `string` 타입을 사용하여 `"Hello"`라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.

{
    const result: string = "Hello";
    console.log(result)
}
// ### 2. **문제: 숫자 변수 선언**

// `number` 타입을 사용하여 `42`라는 숫자를 갖는 변수를 선언하고, 출력하세요.

{
    const result: number = 42;
    console.log(result)
}

// ### 3. **문제: 불리언 변수 선언**

// `boolean` 타입을 사용하여 `true` 값을 갖는 변수를 선언하고, 출력하세요.

{
    const result: boolean = true;
    console.log(result)
}

// ### 4. **문제: 숫자 배열 선언**

// `Array<number>` 또는 `number[]` 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.

{
    const result: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(result)
}

// ### 5. **문제: 문자열 배열 선언**

// `Array<string>` 또는 `string[]` 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.

{
    const result: Array<string> = ["a", 'b', 'c', 'd', 'e'];
    console.log(result)
}

// ### 6. **문제: 튜플 변수 선언**

// `tuple` 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.

{
    const result: [number, string] = [1, 'A'];
    console.log(result)
}

// ### 7. **문제: `null` 값 할당**

// `null` 타입을 사용하여 `null` 값을 갖는 변수를 선언하고, 이를 출력하세요.

{
    const result: null = null;
    console.log(result)
}

// ### 8. **문제: `undefined` 값 할당**

// `undefined` 타입을 사용하여 `undefined` 값을 갖는 변수를 선언하고, 이를 출력하세요.
{
    const result: undefined = undefined;
    console.log(result)
}

// ### 9. **문제: 객체 선언**

// `object` 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.

{
    const result: { age: number; name: string }[] = [
        { age: 20, name: 'kim' },
        { age: 28, name: 'han' },
    ]
    console.log(result)
}

