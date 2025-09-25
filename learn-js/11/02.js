// 객체
// 객체의 키(key)는 value(값)과 속성으로 이루어진 프로퍼티


// 2.3.
user.fullName;
user.address.zipCode;

// 2.3.
user["name"];
user["address"]["zipCode"]

// 2.3.1 수정
user.age = 50;

// 2.3.2 추가 (동적 추가)
user.gender = "male";

// 2.3.3 삭제 (동적 삭제)
delete user.age;
delete user["age"];

// 객체는 할당되지 않은 속성 값을 참조하더라도 항상 undefined로 출력이 되며
// 기본적으로 항상 동적으로 속성을 할당 받을 준비가 되어 있음 (속성값이 없는 경우 추가가 됨)
console.log(user.dddd);

// 3. 객체 메서드에서의 this
const objects = {
    name : "sucoding",
    main : function () {
        console.log(this)
    }
}

// console.log(objects.main())
objects.main();

// 3.1 단축 속성
let name = "park"
const objects = {
    name : "kim",
    // 단축 속성 ( 기존 function () 을 제외하고 그냥 () 함수로 변환)
    greet() {
        console.log(`Hello, ${objects.name}`);
        console.log(`Hello, ${this.name}`);
    }
}

console.log(objects)
objects.greet();

const calculator = {
    subtract : function (a, b){
        return a - b;
    },
    multiply : (a, b) => a - b,
    add(a,b){
        return a + b;
    },
    main,
}

// 4. 객체의 순회
const person = {
    name: "han",
    age : 28,
    job : "developer"
}

// for-in
for (const key in person){
    console.log(key)
}

// [].foreach();
["a", "b", "c"].forEach((v) => console.log(v));

// Object.keys()
Object.keys(person).forEach((key) => {
    console.log(person[key])
})

// Object.entries()
const arr = ['apple', 'banana'];
const [a, b] = arr;


// Object.values()
Object.values(person).forEach((v) => console.log(v))

// 5. 객체를 복사 (병합)
const original1 = {name : "kim", age : 20}
const original2 = {age: 40, gender : "male", addr: {zipcode:111}}

// 5.1 얕은 복사 
const shallowCopy = original1
const shallowCopy2 = Object.assign({}, original1, original2)
const shallowCopy3 = {...original1, ...original2}

shallowCopy2.age = 50
shallowCopy2.arr.zipCode = 50;
console.log(original1)
console.log(original2)
console.log(shallowCopy2)

// 5.2 깊은 복사
const original3 = {age: 40, gender : "male", addr: {zipcode:111}}

// 고전적 방법
// const deepCopy = JSON.parse(JSON.stringify(original3));

// 최선의 방법
const deepCopy = structuredClone(original3)
deepCopy.addr.zipcode= 10;
console.log(deepCopy) // 기본 값 변형 x, 새로운 데이터로 반환
console.log(original3);
