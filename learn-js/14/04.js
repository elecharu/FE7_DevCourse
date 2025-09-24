// ceil = 올림
// floor = 내림 (버림)
// round = 반올림

console.log(Math.round(4.5)) // 5
console.log(Math.random());  // ex) 0.123456789

// 0 ~ 9 까지의 난수를 발생 시키고 싶다?
console.log(Math.random() * 10); 

const numArr = [1,2,3,4];
console.log(numArr[Math.floor(Math.random() * numArr.length)]);

// 15 ~ 25 
console.log(Math.floor(Math.random() * (25 - 15) + 15))