class Person {
    constructor (name, age){
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

class Developer extends Person {
    constructor(name, age, skill){
        super(name,age);
        this.skill = skill
    }

    coding() {
        return `Im ${this.skill} Developer ${this.name} `
    }
}

const p1 = new Developer("Han sungsoo", 28);
console.dir(p1.greet());
p1.skill = 'Javascript';
console.dir(p1.coding());