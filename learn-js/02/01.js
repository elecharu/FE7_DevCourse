const score = [10,20,30,40,50,60,70,80,90,100]

// console.log(score)

const testScore = score.map((value) => {
    console.log("각각 하나씩 출력", value)
})

const filterScore = score.filter((value) => {
    if((value/10) % 2 === 0){
        console.log(value)
    } else {
        console.log("1자리 수 홀수 ㅋ")
    }
})
