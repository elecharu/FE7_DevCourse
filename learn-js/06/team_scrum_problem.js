function solution(n_str) {
    return deleteStartWithZero(n_str);
}

function deleteStartWithZero (str) {
    let result='';
    let strArr = str.split('');
    let checkStartZero = true;

    for(let i = 0; i< strArr.length; i++){
        if(strArr[i] === '0' && checkStartZero) continue;
        if(strArr[i] !== '0') checkStartZero = false;
        result += strArr[i]
    }
    return result
}

// function deleteStartWithZero (str) {
//     return String(Number(str))
// }


console.log(solution('0010'))
console.log(solution('854020'))
console.log(solution('008540200100'))


// 수연님 문제 풀이
function solution2(array) {
    return findMaxValue(array);
}

function findMaxValue(arr){
    let maxValue = 0;

    for(let i = 0; i < arr.length-1; i++){
        if(maxValue < arr[i])
            maxValue = arr[i]
    }

    let maxValueIndex = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(maxValue == arr[i])
            maxValueIndex = i
    }

    return [maxValue, maxValueIndex]
}


console.log(solution2([1, 8, 3]));
console.log(solution2([9, 10, 11, 8]));

// 수연님 다른 문제 풀이(안배운 로직)
// function solution2(array) {
//     return findMaxValue(array);
// }


// function findMaxValue(arr){
//     let maxValue = Math.max(...arr)
//     return [ maxValue, arr.findIndex((cur) => cur === maxValue)]
// }

// console.log(solution2([1, 8, 3]));
// console.log(solution2([9, 10, 11, 8]));


// 상엽씨 문제

function solution3(numbers) {
    const answer = findBehindMaxValue(numbers)
    return answer;
}

function findBehindMaxValue(numArr) {
    let result = [];
    let maxValue = 0;


    for(let i =0; i<numArr.length; i++){
        for(let j =i+1; j<=numArr.length; j++){
            if(maxValue < numArr[j]) maxValue = numArr[j];
            
            if(numArr[i] < numArr[j]) {
                result.push(numArr[j])
                break;
            }
        }
        if(maxValue <= numArr[i]) 
            result.push(-1)
        
        maxValue = 0
    }
    return result;
}

console.log(solution3([2, 3, 3, 5]))
console.log(solution3([9, 1, 5, 3, 6, 2]))


// [2, 3, 3, 5] => [3, 5, 5, -1]
// [9, 1, 5, 3, 6, 2]	=> [-1, 5, 6, 6, -1, -1]