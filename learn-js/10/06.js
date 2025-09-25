// ES2022
class Person {
    // #변수는 자바의 private 기능과 같은 것으로 은닉되는 변수명을 의미
    // 일반 변수는 자바의 public과 같은 느낌이다?
    #age;
    constructor (name, age){
        this.name = name
        this.#age = age
    }
    
    get age() {
        return this.#age;
    }

    set age(value) {
        if(value < 0) throw new Error("Invalid age");
        this.#age = value;
    }
}

const p1 = new Person("HAN", 28);
// p1.age = 10
p1.age = -10
console.log(p1.age)