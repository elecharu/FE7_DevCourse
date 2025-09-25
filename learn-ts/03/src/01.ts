{
    // 구조적 타이핑
    // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식

    const point: { x: number; y: number } = { x: 10, y: 20 }
    const position: { x: number; y: number } = point;

    const fn1: (a: number, b: number) => number = (a, b) => a + b;
    const fn2: (x: number, y: number) => number = fn1
}

{
    // readonly

    const user: {
        readonly name: string;
        readonly age: number;
    } = {
        name: 'kim',
        age: 20
    }


    console.log(user.name)
    console.log(user.age)

    const numArr: readonly number[] = [1, 2, 3, 4, 5, 6]
    console.log(numArr)
    // numArr.push(4) // 이렇게 하면 readonly로 인해서 수정이 불가능
    console.log(numArr)
}

{
    // 인덱스 시그니처
    // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법

    const user: {
        [ket: string]: string
        | string
        | number
        | ({ address: string } & { zipcode: string })
        | ((a: number, b: number) => number);
    } = {
        name: 'kim',
        age: 20,
        obj: {
            address: 'dd',
            zipcode: 'add'
        },
        sum: (a: number, b: number) => a + b
    };

    const person: {
        name: string;
        gender: string;
    } = {
        name: 'kim',
        gender: 'male'
    }
}