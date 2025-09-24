
// 배열 반복문 for in 
let arr = ['banna', 'apple', 'grape']

for (let index in arr){
	console.log("FOR IN 배열 반복문:", arr[index]);
}

// 객체 반복문 for in
let obj = {
	name : '철수',
	age : 28,
	몸무게 : 70,
}

for (let index in obj){
	console.log("FOR IN 객체 반복문:", obj[index])
}

// 배열 반복문 for of
for (const value of arr){
    console.log("FOR OF 반복문:" , value);
}

// 객체 반복문은 for in
// 배열 반복문은 for of
// 공식처럼 생각하기 
