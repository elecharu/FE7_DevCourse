{
    // TODO : 나중에 타입 교체
    // any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
    // unknown - 알 수 없는 타입 (안전한 any, 유연한 any)

    let x: unknown;
    x = 10;
    console.log(x)
    x = 'string 타입'
    console.log(x)
    x = null
    console.log(x)
    x = undefined
    console.log(x)
    x = () => { }
    console.log(x)

    // 만약 any 타입을 사용할 경우 타입 좁히기가 필요!

    let y: any;
    y = 10;

    if (typeof y === 'number') {
        console.log(y.toFixed(2))
    } else {
        console.log(typeof y)
    }
    // console.log(y.toFixed(2)) // 에러 발생
}

{
    // 타입 단언 ( as, <> )
    // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용
    // 타입을 내가 정의, 내가 보장하겠다

    let x: unknown;
    x = 10.12;

    // 장점 -> 타입을 내가 원하는대로 지정할 수 있음
    // 단점 -> 그 책임은 개발자가 가져가야함
    (x as number).toFixed(1);
    console.log(x);

    (<number>x).toFixed(4); // React에서는 잘 안쓰는 방법, JSX 문법과 충돌나는 문제가 있음
    console.log(x);

    (x as { name: string }).name;


}