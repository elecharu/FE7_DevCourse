// # 연습문제(중급)

// ## 1. 객체 값 필터링
function filterByThreshold(obj, num) {
    const result = Object.fromEntries(Object.entries(obj).filter(([k,v]) => v >= num))
    return result
}

// 강사님 버전
function filterByThreshold(obj, threshold) {
    const out = {};
    const entries = Object.entries(obj);
    for( const [k, v] of entries){
        if ( v >= threshold) out[k] = v
    }
    return out
}

const obj = { a: 1, b: 5, c: 3 };
const threshold = 2;
console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

const obj2 = { x: 1, y: 2, z: 3 };
const threshold2 = 2;
console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

const obj3 = { a: 10, b: 5, c: 1 };
const threshold3 = 6;
console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

const obj4 = { m: -1, n: 0, o: 1 };
const threshold4 = 0;
console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }


// 2. 객체의 값 변화
function squareValues(obj) {
    const result = Object.fromEntries(Object.entries(obj).map(([k,v]) => [k, v ** 2]))
    return result
}

// 강사님 버전
function squareValues(obj) {
    const out = {}
    const entries = Object.entries(obj);
    for (const [k,v] of entries){
        out[k] = v ** 2
    }
    return out
}

const obj = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

const obj2 = { x: 2, y: 3 };
console.log(squareValues(obj2)); // { x: 4, y: 9 }

const obj3 = { p: 0, q: -2 };
console.log(squareValues(obj3)); // { p: 0, q: 4 }

const obj4 = {};
console.log(squareValues(obj4)); // {}


// 3. 키 이름 변경
function renameKey(obj, str, changeStr) {
    const result = Object.fromEntries(Object.entries(obj).map(([k,v]) => {
        if(k === str){
            return [changeStr,v]
        } else {
            return [k, v]
        }
    }))
    return result
}

// 강사님 버전
function renameKey(obj, str, changeStr) {
    const out = {};
    for( const key in obj){
        if(Object.hasOwn(obj, key)){
            if(key === str){
                out[changeStr] = obj[key];
            } else {
                out[key] = obj[key]
            }
        }
    }
    return out
}
console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d"));       // { a: 1 }
console.log(renameKey({}, "a", "b"));             // {}
console.log(renameKey({ a: 1 }, "a", "a"));       // { a: 1 }

// 4. 키 정렬된 새 객체 반환
function sortKeys(obj) {
    const result = Object.fromEntries(
        Object.entries(obj).sort(([k1], [k2]) => {
            if (k1 < k2) return -1;
            if (k1 > k2) return 1;
            return 0;
        })
    );
    return result
}

// 강사님 버전
function sortKeys(obj) {
    const keys = Object.keys(obj);
    const out = {}
    for (let i = 0; i < keys.length; i++) {
        let minKey = null
        let minIndex = -1;

        // 남아 있는 키 중 가장 작은 것 찾기
        for(let j = 0; j< keys.length; j++){
            if (keys[j] !== null){
                if(minKey === null || keys[j] < minKey){
                    minKey = keys[j];
                    minIndex = j
                }
            }
        }
        // 결과 객체에 추가
        out[minKey] = obj[minKey];
        // 사용한 키는 null로 표시
        keys[minIndex] = null
    }
    return out
}
console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 }));       // { y: 1, z: 0 }
console.log(sortKeys({}));                   // {}
console.log(sortKeys({ bb: 1, b: 2 }));      // { b: 2, bb: 1 }

// 5. 값 변환 (mapValues)
function mapValues(obj, f) {
    const result = Object.fromEntries(
        Object.entries(obj).map(([k,v]) => {
            return [k,f(v)]
        })
    );
    return result
}

// 강사님 버전
function mapValues(obj, f) {
    const out = {};
    const keys = Object.keys(obj);

    for(let i = 0; i< keys.length; i++){
        const key = keys[i];
        out[key] = f(obj[key])
    }
    return out
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double));             // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// 6. 키/값 뒤집기 (invert)
function invert(obj) {
    const result = Object.fromEntries(
        Object.entries(obj).map(([k,v]) => {
            return [String(v),String(k)]
        })
    );
    return result
}

// 강사님 버전
function invert(obj) {
    const out = {};
    const entries = Object.entries(obj);

    for( const [k, v] of entries){
        out[v] = k
    }
    return out
}

console.log(invert({ a: 1, b: 2 }));        // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" }));    // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({}));                    // {}
console.log(invert({ a: "1", b: 1 }));      // { "1": "b" }

// 7. 중첩 경로 값 얻기 (getByPath) // 이건 진짜 모르겠다 이해가 안간다...
function getByPath(obj, value) {
    const key = value.split('.')
    let result = obj

    for (const k of key) {
        if (result == null || !(k in result)) {
            return undefined;
        }
        result = result[k];
    }

    return result;
}

// 강사님 버전
function getByPath(obj, path) {
    const keys = path.split('.') // ['a', 'b', 'c']
    let current = obj; /// {}

    // a -> b -> c 
    for( let i = 0; i < keys.length; i++){
        // console.log(current)
        if (!current) { // null, undefined, 0 이 여기에 해당
            return 
        }
        // current = {}['a] (undefined)
        current = current[keys[i]];
    }
    return current
}

const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c"));     // 42
console.log(getByPath(data, "a.b.x"));     // undefined
console.log(getByPath({}, "a.b"));         // undefined
console.log(getByPath({ a: null }, "a.b"));// undefined

// 8. 중첩 경로 값 설정 (setByPath)
function setByPath(obj, value, num) {
    const key = value.split('.')
    let result = obj

    for (let i = 0; i< key.length; i++){
        if(i === key.length-1){
            result[key[i]] = num
        } else {
            if(!result[key[i]] || !(key[i] in result) || key[i] === null) result[key[i]] = {}
            result = result[key[i]]
        }
    }
    return result;
}

// 강사님 버전
function setByPath(obj, path, value) {
    const keys = path.split('.') // ['a', 'b', 'c']
    let current = obj; /// {}

    for( let i = 0; i< keys.length; i++){
        const key = keys[i];

        if( i === keys.length - 1){
            current[key] = value;
        } else {
            if(!current[i] || typeof current[key] !== 'object'){
                current[key] = {};
            }
        }
        current = current[key];
    }
    return current
}


const obj1 = {};
setByPath(obj1, "a.b.c", 100);
console.log(obj1); // { a: { b: { c: 100 } } }

const obj2 = { a: { b: 1 } };
setByPath(obj2, "a.c", 2);
console.log(obj2); // { a: { b: 1, c: 2 } }

const obj3 = {};
setByPath(obj3, "x", 5);
console.log(obj3); // { x: 5 }

const obj4 = { a: null };
setByPath(obj4, "a.b", 10);
console.log(obj4); // { a: { b: 10 } }
