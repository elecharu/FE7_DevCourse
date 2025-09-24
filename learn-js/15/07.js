const promise = new Promise((resolve, reject) => {
    console.log("promise created");
    setTimeout(() => {
        resolve('task1')
    }, 1000)
})

promise
    .then((value) => {
        // 성공 했을 때
        console.log(value)
        return 'task2'
    }).then((value) => {
        // 성공 했을 때
        console.log(value)
        return 'task3'
    }).then((value) => {
        // 성공 했을 때
        console.log(value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('task4')
            }, 2000)
        })
    }).then((value) => {
        // 성공 했을 때
        console.log(value)
        return 'task5'
    }).then((value) => {
        // 성공 했을 때
        console.log(value)
        return 'task all finish'
    }).catch((err) => {
        // 실패 했을 때 
        console.log(err)
    })
