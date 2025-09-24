function checkPrimeOdd() {
    let result = [];

    // 소수 판별 함수
    function is_prime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // 클로저: 소수이면서 홀수인 값만 담아 반환
    return function checkOdd(num) {
        for (let i = 0; i <= num; i++) {
            if (is_prime(i) && i % 2 !== 0) {
                result.push(i);
            }
        }
        return result;
    };
}

function solution() {
	return checkPrimeOdd();
}

const primeOdd = solution()
console.log(primeOdd(100))
