{
    // 선언 병합

    interface User {
        name: string;
    }

    interface User {
        age: number;
    }

    // enum
    enum Direction {
        UP, // 0
        DOWN, // 1
    }

    enum Direction {
        RIGHT = 2,
        LEFT = 3,
    }

    Direction.LEFT
}

{
    // 조건부 타입 (삼항 연사자와 비슷함)
    // T extends U ? X : Y

    type IsString<T> = T extends string ? "YES" : "NO"
    type A = IsString<string> // Yes
    type B = IsString<number> // NO
}
{
    type MyType = "a" | "b" | "c";
    type Result = Exclude<MyType, "b"> // "a" | "c"
}

{
    type Exclude<T, U> = T extends U ? never : 1
    type MyType = "a" | "b" | "c";
    type Result = Exclude<MyType, "b"> // "a" | "c"
}