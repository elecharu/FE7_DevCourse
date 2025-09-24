// ### 1. 타입 별칭  - 연습문제 -

import Types = require("node-fetch");

// **문제**: 사람을 나타내는 `Person` 타입을 정의하세요. 이 타입은 `name` (문자열), `age` (숫자) 속성을 가집니다. 그리고 이를 사용하는 `getPersonInfo` 함수를 작성하여 `Person` 객체를 출력하세요.

// ```jsx
//code
{
    type Person = {
        name: string;
        age: number;
    };

    function getPersonInfo(person: Person): void {
        console.log(person)
    }

    getPersonInfo({ name: 'kim', age: 20 })
}

// ```

// ---

// ### 2. 타입 별칭  - 연습문제 -

// **문제**: `Config` 타입을 정의하여 `host` (문자열), `port` (숫자), `ssl` (불린값)을 갖는 객체 타입입니다. `createConfig` 함수는 `Config` 타입을 반환하도록 하세요.

// ```tsx
// //code
{
    type Config = {
        host: string;
        port: number;
        ssl: boolean;
    };

    function createConfig(host: string, port: number, ssl: boolean): Config {
        return {
            host,
            port,
            ssl
        };
    }

    const config = createConfig('localhost', 8080, true);
    console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

// ```

// ---

// ### 3. 타입 별칭  - 연습문제 -

// **문제**: `Rectangle` 타입을 정의하여 `width` (숫자)와 `height` (숫자) 속성을 가지게 하세요. `calculateArea` 함수를 작성하여 `Rectangle` 객체의 면적을 계산하세요.

// ```jsx
//code
{
    type Rectangle = {
        width: number;
        height: number;
    }

    function calculateArea(rect: Rectangle): number {
        return rect.width * rect.height;
    }

    console.log(calculateArea({ width: 5, height: 3 }));
}
// ```

// ---

// ### 4. 타입 별칭  - 연습문제 -

// **문제**: `Student` 타입을 정의하여 `name` (문자열), `age` (숫자), `grades` (숫자 배열) 속성을 포함하게 하세요. 
// `calculateAverageGrade` 함수를 작성하여 평균 성적을 계산하세요.

// ```tsx
// //code
{
    type Student = {
        name: string;
        age: number;
        grades: number[];
    }

    function calculateAverageGrade(student: Student): number {
        return student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length;
    }

    console.log(calculateAverageGrade({ name: 'kim', age: 20, grades: [10, 20, 30, 40, 50] }));
}
// ```

// ---

// ### 5. 타입 별칭  - 연습문제 -

// **문제**: `Response` 타입을 작성하여 `status` (문자열), `data` (문자열), `message` (문자열) 속성을 포함하게 하세요. 
// `createResponse` 함수를 작성하여 이 타입의 객체를 반환하세요.

// ```tsx
// // code
{
    type Response = {
        status: string;
        data: string;
        message: string;
    }

    function createResponse(status: string, data: string, message: string): Response {
        return {
            status,
            data,
            message
        }
    }
    console.log(createResponse('success', 'John', 'fetch success')); // { status: 'success', data: 'John', message: 'fetch success' }
}

// ```

// ---

// ### 6. 타입 별칭  - 연습문제 -

// **문제**: `Employee` 타입을 작성하여 `id` (문자열), `name` (문자열), `position` (문자열) 속성을 가집니다. `getEmployeeInfo` 함수에서 이 정보를 반환하도록 하세요.

// ```tsx
// //code

{
    type Employee = {
        id: string;
        name: string;
        position: string;
    }

    function getEmployeeInfo(employee: Employee) {
        return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
    }
    console.log(getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })); // "james works as a developer with ID: 1."
}
// ```

// ---

// ### 7. 타입 별칭  - 연습문제 -

// **문제**: `Circle` 타입을 작성하여 `radius` (숫자) 속성을 가지게 하세요. `calculateCircumference` 함수에서 원의 둘레를 계산하는 기능을 작성하세요.

// ```tsx
// //code
{
    type Circle = {
        radius: number
    }

    function calculateCircumference(circle: Circle) {
        return 2 * Math.PI * circle.radius
    }
    console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876

}
// ```

// ---

// ### 8. 타입 별칭  - 연습문제 -

// **문제**: `Product` 타입을 작성하여 `name` (문자열), `price` (숫자), `inStock` (불린값) 속성을 가지게 하세요. 
// `getDiscountedPrice` 함수에서 주어진 할인을 적용한 가격을 계산하세요.

// ```tsx
// //code

{
    type Product = {
        name: string;
        price: number;
        inStock: boolean;
    }

    // 다른 공식 (원본 금액 - 할인된 금액 (원본금액 * (할인율 / 100)))
    function getDiscountedPrice(product: Product, discount: number) {
        if (product.inStock) return product.price - (product.price / discount)
        return product.price
    }
    console.log(getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)); // 900
}
// ```

// ---

// ### 9. 타입 별칭  - 연습문제 -

// **문제**: `Book` 타입을 작성하여 `title` (문자열), `author` (문자열), `publishedYear` (숫자) 속성을 포함하도록 하세요.
//  `getBookSummary` 함수에서 책에 대한 간단한 요약을 반환하도록 하세요.

// ```tsx
// //code..
{
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    function getBookSummary(book: Book) {
        return `${book.title} by ${book.author}, published in ${book.publishedYear}.`
    }
    console.log(getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })); // "river by james, published in 2020."

}

// ```

// ---

// ### 10. 타입 별칭  - 연습문제 -

// **문제**: `Transaction` 타입을 작성하여 `id` (문자열), `amount` (숫자), `timestamp` (문자열) 속성을 가지게 하세요. 
// `isValidTransaction` 함수에서 amount가 0보다 큰지 비교해서 결과를 반환하는 로직을 작성해주세요.(참/거짓 반환)

// ```tsx
// //code
// ```

{
    type Transaction = {
        id: string;
        amount: number;
        timestamp: string;
    }

    function isValidTransaction(data: Transaction) {
        return data.amount > 0
    }

    console.log(isValidTransaction({ id: `1`, amount: -20, timestamp: "2025-09-09" }))
}
// ---