class Person {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    // static Method (정적 메소드)
    static APP_NAME = "Person Android";
    static greet() {
        return `Hello, ${this.name}`;
    }
}

const p1 = new Person("HAN", 28);
console.dir(Person);
console.dir(Person.APP_NAME);
console.dir(Person.greet());