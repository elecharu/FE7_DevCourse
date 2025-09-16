{
    // 인터페이스
    // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
    // interface 

    // interface 식별자 { }
    // 국내에서는 대부분 객체는 인터페이스로 표기
    // 
}

{
    interface Person {
        name: string;
        age: number;
        greet(message: string): void; // greet : () => void;
    }

    const person: Person = {
        name: 'kim',
        age: 20,
        greet(message) {
            console.log(`${message}, ${this.name}`);
        },
    }
}


{
    // 인터페이스도 기존 type과 같이 작동한다
    interface Person {
        [key: string]: string | number
    }

    const person: Person = {
        name: 'kim',
        age: 20,
    }
}

{
    // 자동 병합
    interface Person {
        readonly name: string;
    }

    interface Person {
        readonly age: number;
    }

    const person: Person = {
        name: 'kim',
        age: 20,
    };
}

{
    // 상속
    interface Person {
        name: string;
        age: number;
    }

    interface Developer extends Person {
        skill: string;
    }

    const developer: Developer = {
        name: 'kim',
        age: 20,
        skill: "javascript"
    };
}

{
    // 다중 상속 인터페이스
    interface Flyer {
        fly(): void;
    }

    interface Swimmer {
        swim?(): void;
    }

    interface Bird extends Flyer, Swimmer {
        sound(): void;
    }

    const duck: Bird = {
        fly() { },
        // swim() { },
        sound() { },
    }
}

{
    interface AddFn {
        (a: number, b: number): number;
    }

    const add: AddFn = (a, b) => a + b;
}