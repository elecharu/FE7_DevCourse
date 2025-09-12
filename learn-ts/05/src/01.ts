

{
    // 클래스
    class Car {
        speed: number;
        constructor(speed: number) {
            this.speed = speed
        }
        start(name: string): string {
            return `${name}, start`;
        }
    }

    const benz = new Car(100);
    console.log(benz.start('benz'))
    console.log(benz.speed)

    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        introduce(): string {
            return `Hello, ${this.name}, ${this.age}`
        }
    }
    const person = new Person("Han", 20)
    console.log(person.introduce())
}

{
    // public 기본 값, 클래스 내/외부/상속에서 접근 가능한 방법
    // private - 클래스 내부에서만 접근 가능
    // protected - 클래스 내부와 상속에서만 접근 가능
    class Car {
        speed: number;
        constructor(speed: number) {
            this.speed = speed
        }
        private secret(): string {
            return '차 사고가 크게 난 적 있음'
        }

        search() {
            this.secret()
        }
    }

    const benz = new Car(100);
    console.log(benz.speed)
    console.log(benz.search())
}

{
    class Car {
        private engineOn: boolean = false;
        // 엔진 시작
        start() {
            if (this.engineOn) {
                console.log("엔진이 이미 가동중입니다.")
                return
            }
            this.engineOn = true;
            console.log('엔진 시작')
        }
        // 엔진 정지
        stop() {
            if (!this.engineOn) {
                console.log("엔진이 이미  멈춰있습니다.")
                return
            }
            this.engineOn = false;
            console.log('엔진 정지')
        }
        //엔진 상태
        isEngineOn(): boolean {
            return this.engineOn;
        }
    }

    const benz = new Car();
    console.log(benz.isEngineOn())
    benz.stop()
    console.log(benz.isEngineOn())
    benz.start()
    console.log(benz.isEngineOn())
}

{
    // 클래스
    class Car {
        protected speed: number;
        constructor(speed: number) {
            this.speed = speed
        }
    }
    class Benz extends Car {
        constructor(speed: number) {
            super(speed)
        }
        showSpeed() {
            console.log(this.speed)
        }
    }

    const benz = new Benz(100);
    benz.showSpeed();
}
{
    class Character {
        protected hp: number = 100;
    }
    class Warrior extends Character {
        atack() {
            this.hp -= 10;
            console.log(`HP after attack: ${this.hp}`);
        }
        displayWarriorInfo() {
            console.log(`Warriro HP: ${this.hp}`);
        }
    }
    const warrior = new Warrior();
    warrior.displayWarriorInfo();
    warrior.atack();
}
{
    //readonly
    //한 번 값이 할당되면 수정 불가
    class Config {
        readonly apiUrl = "https://api.example.com";
        readonly appVersion = "v1.0";

        // constructor(apiUrl: string) {
        //   this.apiUrl = apiUrl;
        // }
        displayConfig() {
            console.log(`API_URL: ${this.apiUrl}, APP_VERSION:${this.appVersion}`);
        }
    }

    const config = new Config();
    console.log(config.apiUrl);
    console.log(config.appVersion);
    config.displayConfig();
}
{
    // 메소드 오버라이딩
    class Car {
        speed: number;
        constructor(speed: number) {
            this.speed = speed
        }
        getSpeed(): string {
            return `Car: ${this.speed}`
        }
    }

    class Benz extends Car {
        name: string;
        constructor(speed: number, name: string) {
            super(speed)
            this.name = name;
        }
        getSpeed(): string {
            return `Benz: ${this.speed}`
        }
    }

    const benz = new Benz(100, 'S Class')
    console.log(benz.getSpeed())
}

{
    // 추상 클래스
    // 직접 인스턴스를 생성할 수 없는 클래스를 의미,
    // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)

    // 직접 구현
    abstract class CarAbstract {
        code: string = "A1B2C3";
        abstract name: string;
        abstract speed: number;
        abstract color: string;
        abstract maxSpeed(): number;
        start() {
            console.log("START")
        }
        stop() {
            console.log("STOP")
        }
    }

    class Benz extends CarAbstract {
        name: string;
        speed: number;
        color: string;
        constructor(name: string, speed: number, color: string) {
            super();
            this.name = name;
            this.speed = speed;
            this.color = color;
        }
        maxSpeed(): number {
            return this.speed;
        }
    }
    const benz = new Benz("S", 200, 'Black')
    console.log(benz.maxSpeed())
    benz.start()
    benz.stop()
    console.log(benz.code)
}
{
    // 추상클래스
    // 장점 : 연관된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있다.
    // 단점 : 다른 클래스를 추가 상속하지 못한다. (1개만 상속이 가능)
    // 추상 클래스의 단점을 보완하고자 Implements를 사용

    // implements + interface(type)
    // 추상 클래스는 직접 구현이 가능한데
    // 직접 구현이 불가능, 여러개 implements 가능
    interface Runner {
        name: string;
        run(): void;
    }
    type Swimmer = {
        swim(): void;
    }

    abstract class PersonAbstract {
        abstract stop(): void
    }

    class Person extends PersonAbstract implements Runner, Swimmer {
        name: string;
        constructor(name: string) {
            super()
            this.name = name
        }
        run(): void {
            console.log("Person is Run!")
        }
        swim(): void {
            console.log("Person is Swim!")
        }
        stop(): void { }
    }
}
{
    interface A {
        a(): void;
    }

    interface B extends A {
        b(): void;
    }

    class X implements B {
        a(): void { }
        b(): void { }
    }
}

{
    type A = {
        a(): void;
    }

    // 이 문법도 가능 (type)
    type B = A & {
        b?(): void;
    }
    class X implements B {
        a(): void { }
        b(): void { }
    }
}

{
    // abstract
    // 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 가능)
    // implements
    // 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때(직접 구현 불가능)
}
