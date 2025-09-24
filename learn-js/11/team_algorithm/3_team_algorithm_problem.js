

// 3조 문제 1

function problem3() {
    const items = [2, 4, 5, 3, 2, 7, 1]
    let sum = 0
    let count = 1;

    for (const num in items){
        if(sum + items[num] >= 10){
            count++;
            sum=0;
        } else {
            sum += items[num]
        }
    }
    return console.log(`${count}만큼의 박스가 필요`)
}

problem3()

// 풀어보는데 문제가 이상하게 출제된거 같은...? 10무게를 초과하면 안된다고 했기에
// 2 + 5 + 3 이런식으로 조합하여 10일때 count을 1증가 시켜야할 꺼 같은 데... 10키로 이상시 박스를 1개 추가하는걸로 문제를 정정할 필요가 있어보임