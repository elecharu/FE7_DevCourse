
{
    // 5. 타입 별칭(type alias)
    // 나만의 커스텀 타입을 만들 수 있는 방법을 제공
    // 관례
    type Person = {
        name: string;
        age: number;
        gender?: string;
    }
    const user: {
        name: string; age: number; gender: string
    } = {
        name: 'kim', age: 20, gender: 'male'
    }

    const user2: Person = {
        name: 'kim', age: 20, gender: 'male'
    }
}

{
    type ID = {
        id: string | number;
    }

    type StringId = string;
    type NumberId = number;

    const userId: ID = {
        id: 'ABC'
    }

    const userStringId: StringId = 'teacher-kim'
    const userNumberId: NumberId = 1010
}

{
    // 2. 객체 타입 별칭

    type User = {
        name: string;
        readonly age?: number;
    }

    type Person = {
        [key: string]: string | number;
    }

    const per1: User = {
        name: 'kim',
        age: 20
    }

    const per2: Person = {
        name: 'kim',
        age: 20
    }
}

{
    // 3. 함수 타입 별칭
    type Addfun = (a: number, b: number) => number;
    type Addfun2 = {
        (a: number, b: number): number
    };
    const add: Addfun2 = (a, b) => a + b
    console.log(add(2, 3))
}

{
    // 4. 튜플 타입 별칭
    type Point = [number, number]
    const point: Point = [10, 20]
}

{
    // 5. 타입 확장
    // 5.1 유니온 타입
    // 5.2 인터섹션 타입
    // 5. 인터섹션(유니온) 타입 별칭 (타입 확장)
    type StringID = string;
    type NumberID = number;
    type ID = StringID | NumberID; // string | number

    type Nameable = {
        name: string;
    }

    type Ageable = {
        age: number;
    }

    type Person = Nameable & Ageable // name, age 두 개의 속성 값을 모두 가진다
}

{
    // 6. 리터럴 타입 별칭
    type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
    const direct: Direction = "LEFT"
}