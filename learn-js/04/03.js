// 연습문제 ++

// 1. 문자열 압축
// const i = "aaabbbccc"; 
// const o = "a3b3c3"; 

// const i2 = "aabbaa";
// const o2 = "a2b2a2";

// const i3 = "abbbffd";
// const o3 = "a1b3f2d1";

// const i4 = "aabaa";
// const o4 = "a2b1a2"; // a4b1

function textCompression(str){
    const strArr = str.split('');
    let result = '';
    let count = 1;
    
    for(let i = 0; i<strArr.length; i++){
        if(strArr[i] === strArr[i+1]){
            count++;
        } else {
            result += strArr[i] + count
            count = 1
        }
    }
    
    return result;
}

console.log("문자열 압축:", textCompression('aaabbbccc')); // "a3b3c3"
console.log("문자열 압축:", textCompression('aabbaa')); // "a2b2a2"
console.log("문자열 압축:", textCompression('abbbffd')); // "a1b3f2d1"
console.log("문자열 압축:", textCompression('aabaa')); // "a2b1a2"

// 2. 팰린드롬 확인하기(쉬운 버전)

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("level"));   // true
// console.log(isPalindrome("world"));   // false

function isPalindrome(str){
    const text1 = str.split('');
    const text2 = str.split('').reverse();

    let isPalindrome = Boolean;

    for(let i = 0; i <= text1.length-1; i++){
        for(let j= i; j <= i; j++){
            if(text1[i] !== text2[j]) {
                isPalindrome = false;
                break;
            } else {
                isPalindrome = true
            }
        }
    }
    return isPalindrome;

}
console.log("racecar \t 팰린드롬 확인 \t", isPalindrome("racecar")); // true
console.log("hello \t 팰린드롬 확인 \t", isPalindrome("hello"));   // false
console.log("level \t 팰린드롬 확인 \t", isPalindrome("level"));   // true
console.log("world \t 팰린드롬 확인 \t", isPalindrome("world"));   // false

// 3. 펠린드롬 확인하기 (어려운 버전)

// console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
// console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
// console.log(isPalindromeSentence("Hello, world!"));                  // false
// console.log(isPalindromeSentence("No 'x' in Nixon"));                // true

function isPalindromeSentence(str){
    const text1 = str.toLowerCase().replace(/[\s'!,"?]/g, '').split(''); // 문자열 비교를 위해 소문자로 전부 변경 후 특수문자,공백 제거
    const text2 = str.toLowerCase().replace(/[\s'!,"?]/g, '').split('').reverse(); // 문자열 비교를 위해 소문자로 전부 변경 후 특수문자,공백 제거 후 뒤집기

    let isPalindrome = Boolean;

    for(let i = 0; i <= text1.length-1; i++){
        for(let j= i; j <= i; j++){
            if(text1[i] !== text2[j]) {
                isPalindrome = false;
                break;
            } else {
                isPalindrome = true
            }
        }
    }
    return isPalindrome;

}
console.log("A man, a plan, a canal, Panama! \t 팰린드롬 확인 \t", isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log("Was it a car or a cat I saw? \t 팰린드롬 확인 \t", isPalindromeSentence("Was it a car or a cat I saw?"));   // true
console.log("Hello, world! \t 팰린드롬 확인 \t", isPalindromeSentence("Hello, world!"));   // false
console.log("No 'x' in Nixon \t 팰린드롬 확인 \t", isPalindromeSentence("No 'x' in Nixon"));   // false
console.log("Apple elppa", isPalindromeSentence("Apple elppa"))

// 4. 최대 공약수(GCD)

// gcd(56, 98); // 14
// gcd(101, 10); // 1
// gcd(15, 5); // 5
// gcd(100, 75); // 25
// gcd(18, 24); // 6

function gcd (num1, num2) {
    let num1Array = []
    let num2Array = []

    for(let i = 1; i<=num1; i++){
        if(num1 % i === 0){
            num1Array.push(i)
        }
    }

    for(let j = 1; j <= num2; j++){
        if(num2 % j === 0){
            num2Array.push(j)
        }
    }

    let maxValue = 0;
    for(let value of num2Array){
        if(num1Array.includes(value)){
            if(value > maxValue) maxValue = value;
        }
    }

    return maxValue
    
}

console.log("56, 98의 최대 공약수", gcd(56, 98)) // 14
console.log("101, 10의 최대 공약수", gcd(101,10)) // 1 
console.log("15, 5의 최대 공약수", gcd(15,5)) // 5
console.log("100, 75의 최대 공약수", gcd(100,75)) // 25
console.log("18, 24의 최대 공약수", gcd(18,24)) // 6

// 강사님 버전 (재귀함수 버전)
function gcd2(a, b){
    if ( b === 0 ) return a;
    return gcd2(b, a % b);
}

console.log("56, 98의 최대 공약수", gcd2(56, 98)) // 14
console.log("101, 10의 최대 공약수", gcd2(101,10)) // 1 
console.log("15, 5의 최대 공약수", gcd2(15,5)) // 5
console.log("100, 75의 최대 공약수", gcd2(100,75)) // 25
console.log("18, 24의 최대 공약수", gcd2(18,24)) // 6


// 5. 배열 정렬(버블 정렬)

// console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

function bubbleSort(arr){
    let resultArr = [];
    for(let i =0; i <= arr.length-1; i++){
        let min = Infinity;
        for(let j = 0; j <= arr.length-1; j++){ 
            if(resultArr.includes((arr[j]))){
                continue
            }
            if (min > arr[j]) min = arr[j];
        } 
        resultArr.push(min)
    }

    return resultArr
}

console.log("bubbleSort 결과값", bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// 감사님 버전 (버블 정렬)
function bubbleSort2 (numberArr){
    for (let i = 0 ; i<=numberArr.length-1; i++){
        for (let j = 0; i<= numberArr.length-1-i; j++){
            if(numberArr[i] > numberArr[j+1]){
                const temp = numberArr[i]
                numberArr[i] = numberArr[j+1];
                numberArr[j+1] = temp;
            }
        }
    
    }
    return numberArr
}

console.log(bubbleSort2[5,3,8,1,2])
// 5에서 시작될 경우 
// 5 3
// 5 8
// 5 1 -> 
// 5 2