// 자바스크립트는 동기(synchronous) 언어이다.
// 다만, 자바스크립트 언어적으로 비동기(asynchronous)를 다룰 수 있는 매커니즘을 가지고 있을 뿐

// 콜백함수
// 콜백 : 나중에 불려지다 + 함수 : 어떤 코드의 실행 집합
// 나중에 불러질 함수, 다른 함수의 인자로 전달되어 그 함수 내부에서 호출되는 함수

// 동기 콜백 함수
function print(fn) {
    fn();
}

print(() => console.log("Hello"))


const processArray = (array, callback) => {
    for(const value of array){
        callback(value);
    }
}

const logValue = (value) => console.log(value)
processArray([1,2,3,4], logValue)

// 비동기 콜백 함수
const print2 = (fn) => setTimeout(fn, 1000);
print2(() => console.log("async"));