class Person {
    constructor (name, age){
        this.name = name
        this.age = age
    }

    toString() {
        return `${this.name} ${this.age}`
    }
}


const p = new Person("HAN", 28);
console.dir(String(p))
console.dir(p.toString())
console.dir(p.name, p.age)
console.dir(p)