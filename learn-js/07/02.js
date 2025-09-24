// 클로저란? = 함수가 선언 될 때의 렉시컬 스코프(=환경)을 기억하고, 그 스코프(= 환경)에 있는 변수에 접근할 수 있는 함수
// 함수 내부에서는 외부의 변수(식별자)를 참조 할 수 있다.
// 함수 외부에서는 내부의 변수(식별자)를 참조 할 수 없다.

//

function createUser(name) {
    let _name = name; // _변수명은 Private하게 관리하겠다는 의미
    return {
        getName: () => _name,
        setName: (newName) => (_name = newName),
    }
}

let user = createUser("kim");
console.log(user.getName());
user.setName("HAN");
console.log(user.getName());

user = undefined; //  createUser 함수안에 존재하는 변수를 참조하고 있는 상태이기에 null이나 undefined로 재할당하여 참조를 없에고 가비지 컬렉터를 실행시키기 위한 작업)


// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiper){
    return function(x){
        return x*multiper;
    };
}
let double = makeMultiple(2);
console.log(double(10))
console.log(double(5))
double = null;

// 메모이제이션 패턴 (이미 한번 계산한 결과를 메모리에 저장하고 같은 값으로 재요청시 메모리에 저장된 값을 반환해주는 패턴)
function memoization(cb){
    const cache = {};
    return function(...args) {
        // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고 (...args)
        // 이를 JSON 문자열로 변환해서 key로 사용

        const key = JSON.stringify(args);
        if(cache[key]) return cache[key]; // 이미 있을 경우 기존 값 반환 (재계산 불필요)

        // 만약 없을 경우 원래 함수(fn())을 사용하여 결과를 얻고
        const result = cb(...args);
        // 결과를 캐시에 저장
        cache[key] = result;
        return result;
    };
}

function slowFunction(num){
    for (let i=0; i < 9999999999; i++);
    return num * 2;
}

// console.log(slowFunction(10))
// console.log(slowFunction(10))
// console.log(slowFunction(10))

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(10))
console.log(memoizedFn(10))
console.log(memoizedFn(10))