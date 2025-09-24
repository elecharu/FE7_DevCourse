// 6. 구조분해할당(비구조회할당)
const { name, age}  = {name : 'kim', age: 20}
console.log(name)
console.log(age) 

const [kim, park] = [10,20];
console.log(kim)
console.log(park)

const {
    name : uname,
    age : uage,
    address: {city}
} = {
    name : 'kim',
    age : 20,
    address : {city : 'seoul'}
};

console.log(uname);
console.log(uage)
console.log(userAddress.city);
console.log(apple, banna);

const [
    {name : firstName, age : firstAge},
    {name : secondName, age : secondAge},
] = [
    {name : "kim", age : 20},
    {name: "park", age : 30},
]
console.log(firstName, firstAge, secondName, secondAge)

const { 
    members:
    [
        {name : fname, age : fAge},
        {name : sname, age : sage},
    ]
} = {
    members : [
        {name: "kim", age : 20 },
        {name: "park", age : 30 },
    ]
}

console.log(fname, fAge, sname, sage)

function userInfo( {name = 'kim', age = 20}) {
    console.log(name, age)
}

userInfo(); // 이렇게 하면 오류가 나는게 undefined된 변수들을 호출하기에 에러가 발생
userInfo({}); // 초기에 설정한 값을 반환받기 위해 빈 객체를 전달할 것

function sum ( a, b){
    return a+b;
}
console.log(sum());