class Person {
    constructor (lastName, firstName){
        this.lastName = lastName
        this.firstName = firstName
    }

    get fullName () {
        return `${this.lastName} ${this.firstName}`;
    }
    
    set fullName (value) {
        this.fullName = value;
    }
    
    get reverseName () {
        return `${this.firstName} ${this.lastName}`;
    }

}


const p1 = new Person("HAN", "SUNGSOO")
console.log(p1)
console.log(p1.fullName)
console.log(p1.reverseName)
