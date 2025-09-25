const fetchNumber = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2)
    })
})

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 2)
    .then((num) => {
        return new Promise((resolve, reject) => {
            num * 2;
            setTimeout(() => reject(new Error("에러 발생")), 2000)
        })
    })
    .catch((err) => {
        console.log("에러 발생", err)
        return 0
    })
    .then((num) => console.log(num))