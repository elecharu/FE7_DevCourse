// freeze는 객체를 고정시키는 역할이기에 수정,추가 작업이 불가능
const obj = Object.freeze({
    name : "kim",
})

obj.name = 10;
delete obj.name;
obj.age = 20;

console.log(Object.isFrozen(obj)) // 객체가 freeze 함수가 적용되어 있는 지 확인
console.log(obj)

const sealedObj = Object.seal({
    // 프로퍼티의 추가와 삭제만 안됨 (변경 가능)
    name : "kim"
})

sealedObj.name = "park"
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj)
console.log(Object.isSealed(sealedObj))


const preventObj = Object.preventExtensions({
    // 프로퍼티의 추가만 안됨 (변경, 삭제 가능)
    name : 'kim',
})

preventObj.name = 'park'
delete preventObj.name;
preventObj.age = 20;
console.log(preventObj)
console.log(Object.isExtensible(preventObj))