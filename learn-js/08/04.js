// 프로토타입
// this ->
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(this);
  };
}
Car.prototype.author = "kim";
Car.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};
const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1);
car1.drive();
