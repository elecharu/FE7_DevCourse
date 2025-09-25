const person = {
    firstName : 'sungsoo',
    lastName : 'Han',
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName (value){
        [this.firstName, this.lastName] = value.split(' ') 
    },
}

person.fullName = 'min park' // 변경 안됨
console.log(person.fullName)

// TypeScript의 enum
const Roles = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST : 'guest',
}

const config = Object.freeze({
    apiUrl: 'http://localhost:3000',
    timeout: 3000,
})

