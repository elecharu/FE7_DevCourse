/* eslint-disable no-unused-vars */

// Promise 객체 (ES6)
// 비동기 작업을 처리할 때 사용할 수 있는 매커니즘
// ES6 이전에는 비동기 작업을 처리하는 방법으로 콜백 함수 밖에 없었으나,
// 콜백 함수는 콜백이 중첩되면 코드가 복잡해지고 가독성이 떨어지는 (콜백 지옥) 문제를 해결하고자 나온 방법

// Producer (생산자)
// Promise 객체를 생성하고 정의하는 부분을 의미

const promise = new Promise((resolve, reject) => {
    console.log("promise created");
    // 작업이 성공하면 resolve 호출
    // 작업이 실패하면 reject 호출

    setTimeout(() => {
        // resolve('task1')
        // reject('task1')
        reject( new Error ("에러 발생!"))
    }, 1000)
})

// Consumer (소비자)
promise
    .then((value) => {
        // 성공 했을 때
        console.log(value)
        console.log('task2')
    }).catch((err) => {
            // 실패 했을 때 
            console.log(err)
    })
    // (reason) => {
    //     // 실패 했을 때 
    //     console.log(reason)D
    // })
