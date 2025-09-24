// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.
// 치환, 어떤 변수가 값으로 변경되는 것

// T = Type (가장 일반적인 타입 변수)
// K = Key (객체의 키를 의미)
// V = Value (객체의 값을 의미)
// E = Element (배열의 요소나 이벤트를 의미)
// U = Another Type (T 이외의 만만하면 U)
{
    function getFirstElement(arr: number[] | string[] | boolean[] | [number, string]): number | string | boolean {
        return arr[0]
    }

    console.log(getFirstElement([1, 2, 3])) // 1
    console.log(getFirstElement(["A", "B", "C"])) // A
    console.log(getFirstElement([true, false])) // true
    console.log(getFirstElement([1, "A"])) // 1
}

{
    // 제네릭 사용

    // 함수의 제네릭
    // function get FirstElements<number>(arr:number[]):number{}
    function getFirstElement<T>(arr: T[]): T {
        return arr[0]
    }

    console.log(getFirstElement<number>([1, 2, 3])) // 1
    console.log(getFirstElement<string>(["A", "B", "C"])) // A
    console.log(getFirstElement<boolean>([true, false])) // true
    console.log(getFirstElement<number | string>([1, "A"])) // 1
}

{
    // 널 아님 보장 연산자
    function getFirstElement<T>(arr: T[]): T | undefined {
        return arr[0]
    }

    console.log(getFirstElement<number>([1, 2, 3])) // 1
    console.log(getFirstElement<string>(["A", "B", "C"])) // A
    console.log(getFirstElement<boolean>([true, false])) // true
    console.log(getFirstElement<number | string>([1, "A"])) // 1
}

{
    // 제네릭도 타입 추론이 된다
    // 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장
    function identity<T>(value: T): T {
        return value
    }

    const num = identity<number>(42);
    const str = identity<string>('A');
    const bool = identity<boolean>(true);
}

{
    function logArray<T>(arr: T[]): void {
        arr.forEach((value) => console.log(value))
    }

    logArray<number>([1, 2, 3])
    logArray<string>(["A", "B", "C"])
}

{
    function mergeObj<T, U>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 }
    }

    const mer1 = mergeObj({ name: 'kim' }, { age: 20 })
    const mer2 = mergeObj({ name: 'kim', age: 20 }, { gender: 'male' })

    console.log(mer1)
    console.log(mer2)
}

{
    // 타입 제약
    // 제네릭의 타입을 제한하는 문법
    // T extends U

    function sumArray<T extends number>(arr: T[]): number {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }

    sumArray([1, 2, 3])
}

{
    function returnLength<T extends { length: number }>(arr: T[]): number {
        return arr.length;
    }
    console.log(returnLength(["1", "2", "3"]));
    console.log(returnLength(["hello"]));
    console.log(returnLength([{ length: 10 }]));
}

{
    function logKey<T extends { name: string; age: number }>(obj: T): void {
        console.log(`${obj.name}, ${obj.age}`);
    }

    logKey({ name: 'kim', age: 20, gender: 'male' })
}

{
    interface Box<T extends number | string> {
        value: T;
        getValue(): T,
    }

    const stringBox: Box<string> = {
        value: 'kim',
        getValue() {
            return this.value;
        },
    }
    const numberBox: Box<number> = {
        value: 10,
        getValue() {
            return this.value
        },
    }
}

{
    class Box<T> {
        private items: T[] = [];
        add(item: T) {
            this.items.push(item);
        }
        getAll(): T[] {
            return this.items;
        }
    }

    const stringBox = new Box<{ id: number; name: string }>();
    stringBox.add({ id: 1, name: 'han' });
    console.log(stringBox.getAll());
}