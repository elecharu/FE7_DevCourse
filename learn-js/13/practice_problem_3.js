const str = "Hello, World!";
console.log(str.length)

const str1 = 'JavaScript';
console.log(str1.charAt());

const str2 = "Hello, World!";
console.log(str2.indexOf('o'))

const str3 = "Hello, World!";
console.log(str3.slice(7,12))
console.log(str3.substring(7, 12))

const str4 = "Hello, World!";
console.log(str4.toUpperCase())

const str5 = "   Hello, World!   ";
// 여기에 코드를 작성하세요
console.log(str5.trim())

const str6 = "apple,banana,cherry";
console.log(str6.split(","));

const str7 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str7.replace('World', 'JavaScript'))

const str8 = "I love JavaScript";
// 여기에 코드를 작성하세요
console.log(str8.startsWith('Hello'))

const str9 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str9.endsWith('!'))

const str10 = 'Hello'
console.log(str10.repeat(3))

const str11 = "The rain in Spain stays mainly in the plain.";
// 여기에 코드를 작성하세요
console.log(str11.match(/ain/g))

const str12 = "The quick brown fox jumps over the lazy dog.";
// 여기에 코드를 작성하세요
console.log(str12.search(/fox/))

const str13 = "5";
console.log(str13.padStart(2, 0))

const str14 = "5";
console.log(str14.padEnd(2, 0))

const str15 = "istanbul";
// 여기에 코드를 작성하세요
console.log(str15.toLocaleUpperCase('tr-TR'))
console.log(Intl.DateTimeFormat().resolvedOptions().locale) // 현재 Locale 확인 하는 방법

const str16 = new String("Hello, World!");
console.log(str16.valueOf())

const str17 = "banana";
let uniqueChar = '';
for(let i = 0; i< str17.length; i++){
    if(!uniqueChar.includes(str17[i])) uniqueChar += str17[i]
}
console.log(uniqueChar)

{
    const str18 = "Hello, World!";
    let uniqueChar = '';
    for(let i = 0; i< str18.length; i++){
        if(str18[i] === ',' && uniqueChar.includes(',')) {
            continue;
        }
        if(str18[i] === str18[i].toUpperCase()) uniqueChar += str18[i].toLowerCase()
        else if(str18[i] === str18[i].toLowerCase()) uniqueChar += str18[i].toUpperCase()
        else uniqueChar += str[i]
    }
    console.log(uniqueChar)
}

{
    const str = "Hello, World!";
    const toggled = str.split("").map((char) => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    }).join("");
    console.log(toggled)
}

const str19 = "banana";
const result3 = (str19.match(/a/g) || []).length
console.log(result3)

const words = ["Hello", "world!"];
const result4 = words.join(" ")
console.log(result4)


const str20 = "Hello";
const str21 = "hello";
console.log(str20.toUpperCase() === str21.toUpperCase)
// 여기에 코드를 작성하세요