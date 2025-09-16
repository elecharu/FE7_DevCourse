// ### 문제 1: 요일을 나타내는 상수

// **주어진 코드**:

// ```tsx
{
    enum DAYS {
        MONDAY = 1,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }
    function getDayName(day: DAYS): string {
        if (day === DAYS.MONDAY) return "Monday";
        if (day === DAYS.TUESDAY) return "Tuesday";
        if (day === DAYS.WEDNESDAY) return "Wednesday";
        if (day === DAYS.THURSDAY) return "Thursday";
        if (day === DAYS.FRIDAY) return "Friday";
        if (day === DAYS.SATURDAY) return "Saturday";
        if (day === DAYS.SUNDAY) return "Sunday";
        return "Invalid day";
    }

    console.log(getDayName(1))
}

// ```

// ---

// ### 문제 2: 상태 코드

// **주어진 코드**:

// ```tsx
{
    enum REQUEST_STATUE {
        SUCCESS = 200,
        NOT_FOUND = 404,
        INTERNAL_ERROR = 500,
    }
    function getStatusMessage(status: REQUEST_STATUE): string {
        if (status === REQUEST_STATUE.SUCCESS) return "Success";
        if (status === REQUEST_STATUE.NOT_FOUND) return "Not Found";
        if (status === REQUEST_STATUE.INTERNAL_ERROR) return "Internal Server Error";
        return "Unknown Status";
    }

    console.log(getStatusMessage(200))
    console.log(getStatusMessage(404))
    console.log(getStatusMessage(500))
}

// ```

// ---

// ### 문제 3: 우편번호에 따른 지역 이름

// **주어진 코드**:

// ```tsx
{
    enum LOCATION {
        SEOUL = "Seoul",
        BUSAN = "Busan",
        DAEGU = "Daegu",
    }
    function getCityByZip(zip: string): string {
        if (zip === "100") return LOCATION.SEOUL;
        if (zip === "200") return LOCATION.BUSAN;
        if (zip === "300") return LOCATION.DAEGU;
        return "Unknown City";
    }
    console.log(getCityByZip("100"))
}
// ```

// ---

// ### 문제 4: 사용자 권한

// **주어진 코드**:

// ```tsx
{
    enum PERMISSION {
        ADMIN = "admin",
        USER = "user",
        GUEST = "guest",
    }
    function getPermissionLevel(role: string): string {
        if (role === PERMISSION.ADMIN) return "Full access";
        if (role === PERMISSION.USER) return "Limited access";
        if (role === PERMISSION.GUEST) return "Guest access";
        return "No access";
    }

    console.log(getPermissionLevel("admin"))
}

// ```

// ---

// ### 문제 5: 상품 상태

// **주어진 코드**:

// ```tsx
{
    enum STATUS {
        PENDING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
    }

    function getProductStatus(status: STATUS): string {
        if (status === 1) return "Pending";
        if (status === 2) return "Shipped";
        if (status === 3) return "Delivered";
        return "Unknown Status";
    }

    console.log(getProductStatus(STATUS.SHIPPED))
}
// ```

// ---

// ### 문제 6: 주문 상태

// **주어진 코드**:

// ```tsx
{
    enum STATUS {
        ORDER_PLACED = "Order Placed",
        PAYMENT_PENDING = "Payment Pending",
        SHIPPED = "Shipped",
        DELIVERED = "Delivered",
    }

    function getOrderStatus(status: STATUS): string {
        if (status === STATUS.ORDER_PLACED) return "Your order has been placed.";
        if (status === STATUS.PAYMENT_PENDING) return "Payment is pending.";
        if (status === STATUS.SHIPPED) return "Your order has been shipped.";
        if (status === STATUS.DELIVERED) return "Your order has been delivered.";
        return "Unknown Status";
    }

    console.log(getOrderStatus(STATUS.PAYMENT_PENDING))
}
// ```

// ---

// ### 문제 7: 상태 변경

// **주어진 코드**:

// ```tsx
{
    enum STATUS {
        IS_ACTIVE = 'true',
        IS_INACTIVE = 'false',
    }

    function toggleStatus(status: STATUS): boolean {
        return status === STATUS.IS_ACTIVE ? true : false;
    }

    console.log(toggleStatus(STATUS.IS_ACTIVE))
}
// ```

// ---

// ### 문제 8: 선택지 값

// **주어진 코드**:

// ```tsx
{
    enum OPTION {
        OPTION_ONE = "Option 1",
        OPTION_TWO = "Option 2",
        OPTION_THREE = "Option 3",
    }

    function getOptionValue(option: OPTION): string {
        if (option === OPTION.OPTION_ONE) return "You selected Option 1.";
        if (option === OPTION.OPTION_TWO) return "You selected Option 2.";
        if (option === OPTION.OPTION_THREE) return "You selected Option 3.";
        return "Invalid option";
    }

    console.log(getOptionValue(OPTION.OPTION_THREE))
}
// ```

// ---

// ### 문제 9: 식사 시간

// **주어진 코드**:

// ```tsx
{
    enum MEAL {
        BREAKFAST = "Breakfast",
        LUNCH = "Lunch",
        DINNER = "Dinner",
    }

    function getMealTime(meal: MEAL): string {
        if (meal === MEAL.BREAKFAST) return "Good morning, it's breakfast time!";
        if (meal === MEAL.LUNCH) return "Good afternoon, it's lunch time!";
        if (meal === MEAL.DINNER) return "Good evening, it's dinner time!";
        return "Invalid meal time";
    }
    console.log(getMealTime(MEAL.DINNER))
}
// ```

// ---

// ### 문제 10: 로그인 상태

// **주어진 코드**:

// ```tsx
{
    enum STATUS {
        LOGGED_IN = 1,
        LOGGED_OUT = 0,
    }

    function checkLoginStatus(status: STATUS): string {
        if (status === STATUS.LOGGED_IN) return "You are logged in.";
        if (status === STATUS.LOGGED_OUT) return "You are logged out.";
        return "Unknown status";
    }
    console.log(checkLoginStatus(1))
}
// ```

// ---