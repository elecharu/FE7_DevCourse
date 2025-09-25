{
    // 1. 타입 오퍼레이터
    // 1.1 유니언 타입 -> | (파이프), || (OR)
    // 1.1.1 의미는 비슷하다.
    // 1.1.2 A 또는 B 타입

    let x: number | string | boolean = 10;
    x = 20;
    x = "A";
    x = true;

    const arr: (string | number)[] = ["A", 10];
    const first = arr[0];
    const second = arr[1];

    const arr2: [string, number] = ["A", 10]
    const f = arr2[0]
    f.toLowerCase();

    const s = arr2[1];
    s.toFixed(0)

    // 1.2 인터섹션 타입 -> & (앰퍼샌드), && (AND)
    // 1.2.1 의미는 비슷하다
    // 1.2.2 A 타입과 B 타입

    const user: { name: string, age?: number } = {
        name: 'kim',
        age: 20,
    }

    const user2: { name: string } & { age?: number } = {
        name: 'kim',
        age: 20,
    }
}