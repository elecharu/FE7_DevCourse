const students = [
    { name: "Alice", age: 21, gender: "male", height: 170 },
    { name: "Bob", age: 19, gender: "male", height: 165 },
    { name: "Charlie", age: 20, gender: "male", height: 175 },
    { name: "David", age: 22, gender: "male", height: 180 },
    { name: "Eve", age: 17, gender: "female", height: 160 },
    { name: "Frank", age: 18, gender: "male", height: 175 },
    { name: "Grace", age: 21, gender: "female", height: 165 },
    { name: "Henry", age: 19, gender: "male", height: 170 },
    { name: "Ivy", age: 14, gender: "female", height: 155 },
    { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
const result = students.filter(x => x.height >= 185)

// 강사님 풀이
// const result = students.find(x => x.height >= 185)
console.log(result)

//2. 나이가 20살 이상인 학생들 찾기
const result2 = students.filter(x => x.age >= 20)
console.log(result2)

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
// const result3 = students.map(x => x.height >= 165)

// 강사님 풀이
const result3 = students.some(x => x.height >= 165)
console.log(result3)

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
const result4 = students.every((x) => x.age >= 10)
console.log(result4)

//5. 학생들의 평균 연령 구하기
const result5 = students.reduce((acc, num) => {
    return (acc + num.age)
}, 0) / students.length
console.log(result5)


//6. 남학생들의 평균 연령 구하기
let count = 0;
const result6 = students.reduce((acc, student) => {
    if (student.gender == 'male') {
        count++;
        return acc + student.age;  // 누적값 갱신
    }
    return acc; // 조건에 맞지 않으면 그대로 반환
}, 0) / count

// 강사님 버전

const sumAge = students.filter((students) => students.gender === 'male').reduce((acc,cur) => acc + cur.age,0)
console.log(result6)
console.log('강사님 버전', sumAge / students.length)

//7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기
let womanName = students
    .filter(x => x.gender === 'female')
    .map(x => x.name);
const result7 = womanName;
console.log(result7);

//8. 여학생들 중 나이가 가장 어린 학생 찾기

const result8 = students.filter(x => x.gender === 'female').map(x => x.age).sort((a, b) => a + b).shift();
console.log(result8)


// 내림차순으로 정렬하려면 sort에서 (a, b) => b - a를 사용하면 됩니다.
// 예시: [3, 1, 2].sort((a, b) => b - a) // [3, 2, 1]
// 아래는 여학생들 중 나이가 가장 많은 학생의 나이를 구하는 코드입니다.
const result9 = students
    .filter(x => x.gender === 'female')
    .map(x => x.age)
    .sort((a, b) => b - a)
    .shift();
console.log(result9)