// 1. 특정 문자 제거
function removeChar(text , findText) {
    const result = text.trim().split('').filter((x) => {
        let result = '';
        if(x !== findText){
            result += x;
        }
        return result
    });
    return result.join('')
}

console.log("특정 문자 제거", removeChar("hello world", "o")); // "hell wrld")

// 2. 배열 요소를 반전
function reverseArray(arr) {
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

console.log("배열 요소를 반전", reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1])

// 3. 특정 숫자 찾기
function containsNumber(arr , findValue) {
    let findCheck = Boolean;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === findValue){
            findCheck = true;
            break;
        } else {
            findCheck = false;
        }
    }
    return findCheck;
}

console.log("특정 숫자 찾기", containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log("특정 숫자 찾기", containsNumber([1, 2, 3, 4, 5], 7)); // false


// 4.애너그램인지 확인
function isAnagrams(string1, string2) {
    let value1 = string1.trim().split('').sort();
    let value2 = string2.trim().split('').sort();
    
    if(value1.length !== value2.length) return false;

    let checkCompleteArr = [];
    for(let i = 0; i <= value1.length-1; i++){
        for(let j= 0; j <= value2.length-1; j++){
            if(value1[i] === value2[j]) {
                checkCompleteArr.push(value1[i]);
                break;
            }
        }
    }
    if(String(checkCompleteArr) === String(value1) && String(checkCompleteArr) === String(value2)){
        return true;
    } else {
        return false;
    }
}

console.log("애너그램인지 확인", isAnagrams("listen", "silent")); // true
console.log("애너그램인지 확인", isAnagrams("fluster", "restful")); // true
console.log("애너그램인지 확인", isAnagrams("rat", "car")); // false
console.log("애너그램인지 확인", isAnagrams("aaa", "aaaa")); // false

// 5. 배열에서 두 수의 합

function twiceSum(arr , findValue) {
    // let sum = 0;
    let result = [];
    for(let i = 0; i <= arr.length-1; i++){
        for(let j = i+1; j <= arr.length-1; j++){
            if( i === j ) break;
            let sum = 0;
            sum += arr[i] + arr[j]; 
            if(sum === findValue){
                result.push([arr[i],arr[j]])
                break;
            }
        }
    }
    return result;
}

console.log("배열에서 두 수의 합", twiceSum([1, 2, 3, 4, 5], 5));
console.log("배열에서 두 수의 합", twiceSum([1, 2, 3, 4, 5], 9));
console.log("배열에서 두 수의 합", twiceSum([1, 2, 3, 4, 5], 6));

// 강사님 버전
function twiceSum2 (arr, findValue) {
    let pairs = [];
    let seen = new Set();

    for (const num of arr){
        const complete = findValue - num;
        if(seen.has(complete)){
            pairs.push([complete, num])
        }
        seen.add(num)
        console.log(num, seen)
    }
    return pairs;
}

console.log("배열에서 두 수의 합", twiceSum2([1, 2, 3, 4, 5], 5));
console.log("배열에서 두 수의 합", twiceSum2([1, 2, 3, 4, 5], 9));
console.log("배열에서 두 수의 합", twiceSum2([1, 2, 3, 4, 5], 6));

// console.log();