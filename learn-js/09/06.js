// 01
function Vehicle(speed) {
    this.speed = speed;
}

// 여기에 accelerate 메서드를 추가하세요.
Vehicle.prototype.accelerate = function (num) {
    return this.speed += num
}

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10


// 02
function Shape() {}

Shape.prototype.getArea = function() {
    throw new Error("getArea() must be implemented");
};

function Circle(radius) {
    this.radius = radius;
}

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

// 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.
Circle.prototype.getArea = function () {
    return this.radius * this.radius * 3.14
}
Rectangle.prototype.getArea = function () {
    return this.width * this.height
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// 03 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName
}

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// 04 
function BankAccount(initialBalance) {
    this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function (num) {
    return this.balance += num
}
BankAccount.prototype.withdraw = function (num) {
    return this.balance -= num
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// 05 
function Employee(baseSalary, bonus) {
    this.baseSalary = baseSalary;
    this.bonus = bonus;
}

// 여기에 getSalary 메서드를 추가하세요.
Employee.prototype.getSalary = function () {
    return this.baseSalary + this.bonus
}

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// 06 
function Library() {
    this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function (str) {
    return this.books.push(str)
}

Library.prototype.listBooks = function () {
    return this.books
}

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]


// 07 
function Calculator() {}

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function (num1, num2) {
    return num1 + num2
}
Calculator.prototype.subtract = function (num1, num2) {
    return num1 - num2
}
Calculator.prototype.multiply = function (num1, num2) {
    return num1 * num2
}
Calculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) return "Cannot divide by zero";
    return num1 / num2;
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// 08
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

// 여기에 isAdult 메서드를 추가하세요.
Person2.prototype.isAdult = function () {
    return this.age <= 18 ? false : true
}

const john = new Person2("John", 20);
console.log(john.isAdult()); // true
const alice = new Person2("Alice", 16);
console.log(alice.isAdult()); // false

// 09
function Stack() {
    this.items = [];
}

// 여기에 push 및 pop 메서드를 추가하세요.
Stack.prototype.push = function (num) {
    return this.items.push(num)
}
Stack.prototype.pop = function () {
    if(this.items.length === 0) return "Stack is empty"
    return this.items.pop()
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

// 10
function Person3(name) {
    this.name = name;
    this.friends = [];
}

// 여기에 addFriend 및 listFriends 메서드를 추가하세요.
Person3.prototype.addFriend = function (str) {
    return this.friends.push(str)
}

Person3.prototype.listFriends = function () {
    return this.friends
}

const john2 = new Person3("John");
john2.addFriend("Alice");
john2.addFriend("Bob");
console.log(john2.listFriends()); // ["Alice", "Bob"]