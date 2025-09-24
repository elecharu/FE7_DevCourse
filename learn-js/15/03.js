function task1(callback) {
    console.log("task1");
    callback();
}

function task2(callback) {
    setTimeout(() => {
        console.log("task2")
        callback()
    }, 1000);

}

function task3(callback) {
    console.log("task3")
    callback()
}

function task4(callback) {
    setTimeout(() => {
        console.log("task4")
        callback()
    }, 1000);
}

function task5(callback) {
    console.log("task5")
    callback()
}

// 콜백 함수, 콜백 지옥 패턴
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log("task all finish")
                })
            })
        })
    })
})