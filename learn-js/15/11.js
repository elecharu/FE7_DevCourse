// ES5 콜백 함수
// ES6 Promise 객체
// ES7 async, await (syntatic sugar)

async function fetchNumber(){
    return 2;
}

fetchNumber()
    .then(console.log)

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getFirstText = async () =>{
    await delay(1000);
    return "텍스트1"
}
const getSecondText = async () =>{
    await delay(1000);
    return "텍스트2"
}
const getThirdText = async () =>{
    await delay(1000);
    return "텍스트3"
}

const getAllText = async () => {
    console.time();
    const text1Promise = getFirstText();
    const text2Promise = getSecondText();
    const text3Promise = getThirdText();

    const test1 = await text1Promise;
    const test2 = await text2Promise;
    const test3 = await text3Promise;

    console.log(test1, test2, test3)
    console.timeEnd();
}

getAllText();