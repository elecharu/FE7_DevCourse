// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name : "age", age : 20};
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser);
console.log(jsonUser);

const parsUser = JSON.parse(jsonUser);
console.log(typeof parseUser);
console.log(parsUser)

const jsonStr = JSON.stringify(10);
const parseJson = JSON.parse(jsonStr);
console.log(typeof parseJson)
console.log(parseJson);