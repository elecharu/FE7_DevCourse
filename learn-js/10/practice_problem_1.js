// ### 1. 기본 클래스 생성
// **문제 1:** `Car` 클래스를 정의하고, `make`, `model`, `year`를 인스턴스 변수로 갖도록 하세요. 
// `info` 메서드를 추가하여 자동차 정보를 출력하도록 하세요.

class Car {
    constructor(make, model, year) {
      // 초기화 코드
        this.make = make;
        this.model = model;
        this.year = year;
    }

    info() {
        return `${this.year} ${this.make} ${this.model}`
    }
}

  // 테스트 케이스
const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.info()); // 2020 Toyota Camry

// ### 2. 상속
// **문제 2:** `Animal` 클래스를 만들고, `Dog` 클래스를 `Animal`로부터 상속받게 하세요. `Dog` 클래스에 `bark` 메서드를 추가하세요.

class Animal{
    constructor(name){
        this.name = name;
    }
}
class Dog extends Animal{
    constructor(){
        super(Animal)
    }
    introduce(){
        return `바둑이 입니다.`
    }
    bark(){
        return `왈왈`
    }
}

// 테스트 케이스
const dog = new Dog('바둑이');
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// ### 3. 정적 메서드
// **문제 3:** `MathUtil` 클래스를 만들어, 두 수의 최소값을 반환하는 정적 메서드 `min`을 작성하세요.
class MathUtil {
    static min(num1, num2){
        return num1 < num2 ? num1 : num2;
    }
}

console.log(MathUtil.min(10, 20));


// ### 4. 접근자 (Getter/Setter)
// **문제 4:** `Rectangle` 클래스를 정의하고, `width`와 `height`를 속성으로 갖도록 하세요. `area`는 접근자로 구현하세요.
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

// ### 5. 클래스 메서드
// **문제 5:** `Counter` 클래스를 만들어, 카운터를 증가시키는 클래스 메서드 `increment`와 현재 값을 반환하는 `getValue` 메서드를 추가하세요. 카운터의 초깃값은 0입니다.

class Counter {
    static count = 0

    static increment() {
        this.count += 1;
        return this.count
    }

    static getValue() {
        return this.count
    }
}
// 테스트 케이스
Counter.increment();
console.log(Counter.getValue());

// ### 6. 프로토타입 확장
// **문제 6:** `Person` 클래스를 정의하고, 프로토타입에 `greet` 메서드를 추가하세요.
class Person {
    constructor(name){
        this.name = name;
    }

    greet() {
        return `${this.name} 안녕!`
    }
}

const person = new Person('이순신');
console.log(person.greet()); // 이순신 안녕!

// ### 7. 다형성
// **문제 7:** `Shape` 클래스를 만들고(area 메서드 포함), `Circle`와 `Rectangle` 클래스를 상속받도록 하세요. 각각의 `area` 메서드를 오버라이드(오버라이딩)하세요.

class Shape{
    constructor(radius){
        this.radius= radius;
    }
}

class Circle extends Shape{
    constructor(Shape){
        super(Shape)
    }
    area (){
        return this.radius * this.radius
    }

}

class Rect extends Shape{
    constructor(Shape){
        super(Shape)
    }
    area () {
        return this.radius * this.radius * 3.14
    }

}


const circle = new Circle(5);
console.log(circle.area());  // 5 * 5 * 3.14 

const rect = new Rect(5);
console.log(rect.area()); // 25 (5*5)

// ### 8. 인스턴스 메서드 체이닝
// **문제 8:** `Builder` 클래스를 만들어, 여러 메서드를 체이닝할 수 있도록 하세요.
class Builder {
    constructor() {
        this.text = '';
    }

    append(str) {
        this.text += str;
        return this; // 자기 자신을 리턴해야 체이닝 가능!
    }

    getValue() {
        return this.text;
    }
}

const builder = new Builder();
const result = builder.append('Hello, ').append('World!').getValue();
console.log(result); // Hello, World!

// ### 9. 클래스의 인스턴스 수 추적
// **문제 9:** `Book` 클래스를 정의하고, 생성될 때마다 인스턴스 수를 카운트하도록 하세요.

class Book {
    static book = []

    constructor(str){
        Book.book.push(str)
    }
    static getCount(){
        return Book.book.length;
    }
}

const book1 = new Book('1984');
const book2 = new Book('하이퍼리얼리티');
console.log(Book.getCount()); // 2 

// ### 10. 기본값 설정
// **문제 10:** `User` 클래스를 정의하고, `age`의 기본값을 18로 설정하도록 하세요.

class User {
    constructor(str){
        this.name = str;
        this.age = 18
    }

    info(){
        return `${this.name}의 나이는 ${this.age}세 입니다.`;
    }
}

const user = new User('홍길동');
console.log(user.info()); // 홍길동의 나이는 18세입니다.