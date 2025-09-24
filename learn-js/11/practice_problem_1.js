// ## 1. 객체 병합
function mergeObjects (obj1, obj2) {
    // return Object.assign({}, obj1, obj2)
    return { ...obj1, ...obj2 }
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

const obj3 = { x: 10 };
const obj4 = { y: 20 };
console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// 2. 키-값 배열화
function objectToArray (obj) {
    return Object.entries(obj)
}

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

const obj2 = { x: 5, y: 10 };
console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

const obj3 = { p: 3 };
console.log(objectToArray(obj3)); // [['p', 3]]

const obj4 = {};
console.log(objectToArray(obj4)); // []

// 3. 객체에서 특정 키 삭제

function deleteKey (obj, key) {

    // return Object.fromEntries(
    //     Object.entries(obj).filter(([k]) => k !== key)
    // );

    const result = structuredClone(obj)
    delete result[key]
    return result
}

const obj = { a: 1, b: 2, c: 3 };
const keyToDelete = 'b';
console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

const obj2 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = 'y';
console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

const obj3 = { a: 5 };
const keyToDelete3 = 'a';
console.log(deleteKey(obj3, keyToDelete3)); // {}

const obj4 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = 'p';
console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }


// 4. 객체의 값으로 키 찾기
function findKeyByValue( obj, num){
    // const result = Object.entries(obj).find(([k,v]) => v===num)
    // return result ? result[0] : null

    for( const k in obj ){
        if(obj[k] === num ) return k;
    }
    return null
}
const obj = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null


// 5. 객체의 모든 값 곱하기
function multiplyValues(obj){
    let sum = 1;
    Object.entries(obj).filter(([k,v]) => sum *= v)
    // console.log(sum)
    return sum
}

// 강사님 버전
// function multiplyValues(obj){
//     let sum = 1;
//     for (const k in obj){
//         if(Object.hasOwn(obj,k)){
//             sum *= obj[k]
//         }
//     }
//     return sum
// }

const obj = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj2 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj3 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj4 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)


// 6. 키 존재 여부 확인
function hasOwnKey(obj, keyword){
    return obj.hasOwnProperty(keyword)
}

// // 강사님 버전
// function hasOwnKey(obj, keyword){
//     return Object.hasOwn(obj,keyword)
// }

const obj = Object.create({ inherited: 1 });
obj.own = 2;

console.log(hasOwnKey(obj, "own"));        // true
console.log(hasOwnKey(obj, "inherited"));  // false
console.log(hasOwnKey({}, "a"));           // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

// 7. 특정 키만 선택 (pick)
function pick(obj, arr){
    return Object.fromEntries(
        Object.entries(obj).filter(([k, _]) => arr.includes(k))
    );
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"]));          // {}
console.log(pick({}, ["a"]));                        // {}
console.log(pick({ a: 1 }, []));                     // {}

// 특정 키 제외 (omit)
function omit(obj, arr){
    return Object.fromEntries(
        Object.entries(obj).filter(([k, _]) => !arr.includes(k))
    );
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));    // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"]));   // {}
console.log(omit({}, ["a"]));                      // {}
console.log(omit({ a: 1, b: 2 }, []));             // { a: 1, b: 2 }