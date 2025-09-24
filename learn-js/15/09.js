function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task1")
            resolve()
        }, 1000)
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task2")
            resolve()
        }, 1000)
    })
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task3")
            resolve()
        }, 1000)
    })
}

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task4")
            resolve()
        }, 1000)
    })
}

function task5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task5")
            resolve()
        }, 1000)
    })
}

task1() //
    .then(() => task2())
    .then(() => task3())
    .then(() => task4())
    .then(() => task5())
    // 마지막에 무조건 적으로 실행 되는 부분
    .finally(() => console.log("task all finish"))
