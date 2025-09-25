{
    function getAbsoluteValue(num) {
        return Math.abs(num)
    }

    // 테스트 케이스
    console.log(getAbsoluteValue(-5)); // 5
    console.log(getAbsoluteValue(3));  // 3
}

{
    function roundNumber(num) {
        return Math.round(num)
    }
    
    // 테스트 케이스
    console.log(roundNumber(4.6)); // 5
    console.log(roundNumber(4.4)); // 4
}

{
    function getMax(a, b) {
        return Math.max(a,b) // 최댓값
    }
    
    // 테스트 케이스
    console.log(getMax(10, 20)); // 20
    console.log(getMax(-5, -3)); // -3
}

{
    function getMin(a, b) {
        return Math.min(a,b) // 최소값
    }
    
    // 테스트 케이스
    console.log(getMin(10, 20)); // 10
    console.log(getMin(-5, -3)); // -5
}

{
    function calculateSquareRoot(num) {
        return Math.sqrt(num) // 제곱근
    }
    
    // 테스트 케이스
    console.log(calculateSquareRoot(16)); // 4
    console.log(calculateSquareRoot(25)); // 5
}

{
    // Math.floor(Math.random() * (B - A) + 1) + A
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min
    }
    
    // 테스트 케이스
    console.log(getRandomInt(1, 10)); // 1과 10 사이의 무작위 정수
}

{
    function power(base, exponent) {
        return Math.pow(base, exponent)
    }
    
    // 테스트 케이스
    console.log(power(2, 3)); // 8
    console.log(power(5, 2)); // 25
    
}

{
    function calculateSine(angle) {
        return Math.sin(angle)
    }

    function calculateCos(angle) {
        return Math.cos(angle)
    }

    function calculateTan(angle) {
        return Math.tan(angle)
    }
    
    // 테스트 케이스
    console.log(calculateSine(Math.PI / 2)); // 1
    console.log(calculateSine(0)); // 0
}

{
    function calculateCircleArea(radius) {
        return Math.PI * Math.pow(radius, 2) // 3.14 * radius * radius
    }
    
    // 테스트 케이스
    console.log(calculateCircleArea(5)); // 78.53981633974483
}