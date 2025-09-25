function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 새로운 객체를 만들건데, 그 객체의 프로토 타입을 Animal.prototype으로 하겠따
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);
console.dir(dg);
console.log(dg.speak());
