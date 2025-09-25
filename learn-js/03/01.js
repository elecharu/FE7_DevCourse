// 1번
let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2번
let x = 12;
let y = 7;
let z = 5;

console.log( x > 10 && y < 5);
console.log( x > 10 || z > 3);
console.log( y !== 0 );

// 3번
let isLoggedIn = true;
let isAdmin = false;

console.log( isLoggedIn ? "Welcome" : "Please log in");
console.log( isAdmin  ? "Admin access granted" : "Restricted access");
console.log( isLoggedIn && isAdmin ? "Full access granted" : "Restricted access");

// 4번
let value1 = undefined;
let value2 = "Problem4";

console.log( value1 || value2 ? "값이 존재함" : "값이 존재하지 않음")
console.log( !value1 && !value2 ?  "값이 존재하지 않음" : "값이 하나라도 존재함")

// 5번
let num = 7;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);