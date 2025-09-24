// 2.참조 자료형
// 2.1 배열
// 2.1.1 []
// 2.1.2 Array => (제네릭)
// 2.2 객체
// 2.3 함수 ( o-> 나중에 살펴봄)

{
    const a: [] = [];
    const b: Array<never> = [];

    // const arr : [] = [] // []을 선언하여 요소를 추가할 수 없음, 오로지 공백
    const arr: number[] = [];
    arr.push(10);

    // const arr2 : Array<never> = []; // <never>를 선언하여 요소를 추가할 수 없음
    const arr2: Array<number> = [];
    arr2.push(10);

    // 튜플(tuple)
    const arr3: [number, string] = [1, 'a'];

    const arr4: [number[], string[], boolean[]] = [
        [1, 2, 3],
        ["a", "b", "c"],
        [true, true, false]
    ];

    const blocks: string[][][] = [
        [["a", "b"], ["c"]],
        [["d", "e"], ["f"]]
    ]

    const blocks2: [[string[], number[]], [string[], number[]]] = [
        [["a", "b"], [1]],
        [["d", "e"], [2]]
    ]

}

// 객체
{
    const obj: {} = {}; // Record<string, never>
    const user: {
        name: string;
        age: number;
        gender: string;
        fruits: string[];
        address: {
            zipcode: number;
            details: [string, string, number]
        }
    } = {
        name: 'kim',
        age: 20,
        gender: 'mail',
        fruits: ["apple", 'banana'],
        address: {
            zipcode: 3333,
            details: ['서울특별시', '관악구 ', 131]
        }
    }
}