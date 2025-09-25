function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.info = function () {
    return `${this.type} vehicle`;
}

function Car(brand){
    Vehicle.call(this, 'car');
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getInfo = function () {
    return `${this.type}, ${this.brand}`;;
}

const car1 = new Car("BMW");
console.log(car1.info());
console.log(car1.getInfo());