function Counter ( num = 0) {
    let count = num;

    this.increment = function () {
        count++;
        return count;
    }

    this.decrement = function () {
        count--;
        return count;
    }

    this.getCount = function () {
        return count;
    }
}

const countNumber = new Counter();
console.log(countNumber.getCount())
console.log(countNumber.increment())
console.log(countNumber.getCount())
console.log(countNumber.decrement())
console.log(countNumber.getCount())