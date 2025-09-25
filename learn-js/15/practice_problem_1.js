{
    // 1
    function problem1() {
        return new Promise((resolve, reject) => {
            resolve();
        })
    }

    problem1()
        .then(() => console.log('성공'))
        .catch((err) => console.error(err))
}

{
    // 2
    function problem1() {
        return new Promise((resolve, reject) => {
            resolve(2);
        })
    }


    problem1()
        .then((num) => console.log(num * 2))
}

{
    // 3
    function problem1() {
        return new Promise((resolve, reject) => {
            reject('실패!');
        })
    }

    problem1()
        .then(() => console.log('성공'))
        .catch((err) => console.error(err))
}

{
    // 4
    function problem1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('비동기 작업 완료!');
                resolve();
            }, 2000)
        })
    }

    problem1()
        .then(() => null)
        .catch((err) => console.error(err))
}

{
    // 5
    function problem1() {
        return new Promise((resolve, reject) => {
            new Promise((resolve2, reject2) => {
                console.log("성공?")
                resolve2();
            })
            reject('실패2')
        })
    }

    problem1()
        .then(() => console.log('성공'))
        .catch((err) => console.error(err))
}


{
    function condition(bool) {
        return new Promise((resolve, reject) => {
            return bool ? resolve() : reject(`${bool}이므로 실패`)

        })
    }

    condition(false)
        .then(() => console.log('성공'))
        .catch((err) => console.error(err))
}