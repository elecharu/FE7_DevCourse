
{
    // enum (이넘)
    // moveX -> 왼쪽과 오른쪽을 이동할 수 있게 만든 것

    type moveX = "LEFT" | "RIGHT"

    function moveX(direction: moveX): void {
        if (direction === "LEFT") {
            console.log("왼쪽")
        }
        if (direction === "RIGHT") {
            console.log("오른쪽")
        }
    }

    moveX("LEFT")
    moveX("RIGHT")
}

{
    type moveX = "LEFT" | "RIGHT" | "UP" | "DOWN"

    function moveX(direction: moveX): void {
        if (direction === "LEFT") {
            console.log("왼쪽")
        }
        if (direction === "RIGHT") {
            console.log("오른쪽")
        }
        if (direction === "UP") {
            console.log("위로")
        }
        if (direction === "DOWN") {
            console.log("아래로")
        }
    }

    moveX("UP")
    moveX("DOWN")
    moveX("LEFT")
    moveX("RIGHT")
}

{
    // enum(이넘)
    // 고정된 값들의 집합을 정의하는데 사용하는 특수한 타입
    // 아래의 함수와 같이 값들을 일일이 저장하는 방식을 사용하지 않는 것
    function move(direction: "LEFT" | "RIGHT" | "UP" | "DOWN"): void {
        if (direction === "LEFT") {
            console.log("왼쪽")
        }
        if (direction === "RIGHT") {
            console.log("오른쪽")
        }
        if (direction === "UP") {
            console.log("위로")
        }
        if (direction === "DOWN") {
            console.log("아래로")
        }
    }

    // enum 사용 방식
    enum directionMove {
        LEFT,
        RIGHT,
        UP,
        DOWN
    }

    function moveCharactor(direction: directionMove) {
        if (direction === directionMove.LEFT) {
            console.log("왼쪽")
        }
        if (direction === directionMove.RIGHT) {
            console.log("오른쪽")
        }
        if (direction === directionMove.UP) {
            console.log("위로")
        }
        if (direction === directionMove.DOWN) {
            console.log("아래로")
        }
    }
}

{
    // 숫자형 enum
    enum Direction {
        UP, // 0
        DOWN, // 1
        LEFT, // 2
        RIGHT, // 3 
    }

    console.log(Direction.UP)
    console.log(Direction.DOWN)
    console.log(Direction.LEFT)
    console.log(Direction.RIGHT)
}
{
    // 숫자형 enum
    enum Direction2 {
        UP, // 0
        DOWN = 100, // 1이 아닌 할당한 값 100이 출력
        LEFT, // 2가 아닌 100 다음의 숫자 101이 출력
        RIGHT, // 3가 아닌 101 다음의 숫자 102이 출력 
    }

    console.log(Direction2.UP)
    console.log(Direction2.DOWN)
    console.log(Direction2.LEFT)
    console.log(Direction2.RIGHT)
}

{
    // 문자형 enum (열거형)
    enum Direction3 {
        UP = "UP",
        DOWN = "DOWN",
        LEFT = "LEFT",
        RIGHT = "RIGHT",
    }

    console.log(Direction3.UP)
    console.log(Direction3.DOWN)
    console.log(Direction3.LEFT)
    console.log(Direction3.RIGHT)
}

{
    // 혼합 enum (열거형)
    enum Mix {
        YES = 1,
        NO = "NO"
    }
    console.log(Mix)
    console.log(Mix.YES)
    console.log(Mix.NO)

    enum Direction {
        UP = 200,
        DOWN = "DOWN",
        LEFT = 300,
        RIGHT = "RIGHT",
    }

    console.log(Direction.UP)
    console.log(Direction.DOWN)
    console.log(Direction.LEFT)
    console.log(Direction.RIGHT)
}

{
    // 객체 - interface (type)
    // 리터럴 타입 - enum (const enum)
    // 타입 별칭 - 유니온 타입, 인터넥션

    const enum Role {
        ADMIN = 'admin',
        GUEST = 'guest',
    }

    interface Account {
        id: number;
        role: Role;
    }

    type AuthAccount = Account & { token?: string }
}

{
    interface Token {
        token?: string;
    }

    interface Account {
        id: number;
        role: "admin" | "guest";
    }

    interface AuthAccount extends Token { }
}

{
    type Token = {
        token?: string;
    }

    type Account = {
        id: number;
        role: "admin" | "guest";
    }

    type AuthAccount = Token & Account
}