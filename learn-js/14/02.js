// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(object)와 비슷해 보이지만, 차이점이 존재
// 1. object 객체의 키로 문자열이나 심볼만 사용가능
// 1.1 맵 객체는 모든 값을 키로 사용할 수 있음
// 2. 삽입 순서를 근대로 유지
// 3. .size 속성도 제공

// const map = new Map();
// map.set('name', 'kim');
// console.log(map)


const user = { name : 'kim', addr : { zipCode : 123 }};
const copyUser = { ...user} // JSON.parse(JSON.stringify(user)), structuredClone(user)
const map = new Map();
map.set('name', 'kim')
map.set(user, 1)
map.set(copyUser, 1)

console.log(map)
console.log(map.get(user))
console.log(map.has(user))

console.log(map.has(1))
console.log(Object.hasOwn(map, 'name'))

console.log(map.size)


// 이터러블한 객체 (iterable)
// 배열, map, set

const map = new Map();
map.set('name', 'kim');
map.set('age', 20);

for( const [k, v] of map){
    console.log(k, v)
}

for ( const key of map.keys()){
    console.log(`key: ${key}, value: ${map.get(key)}`);
}

for(const value of map.values()){
    console.log(value)
}

for (const [k,v] of map.entries()){
    console.log(k, v)
}

for (const [k,v] of map){
    console.log(k, v)
}

map.forEach((value, key , map) => {
    console.log(value)
    console.log(key)
    console.log(map)
})

console.log(map)