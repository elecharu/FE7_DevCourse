{
    const nowDate = new Date();

    const years = nowDate.getFullYear().toString().padStart(2, '0');
    const months = (nowDate.getMonth() + 1).toString().padStart(2, '0');
    const days = nowDate.getDate().toString().padStart(2, '0');

    const hours = nowDate.getHours().toString().padStart(2, '0');
    const minutes = nowDate.getMinutes().toString().padStart(2, '0');
    const seconds = nowDate.getSeconds().toString().padStart(2, '0');

    console.log(`${years}. ${months}. ${days}. ${hours}:${minutes}:${seconds}`)
}

{
    const date = new Date(2025, 11, 25)
    switch (date.getDay()) {
        case 0:
            console.log("일요일")
            break;
        case 1:
            console.log("월요일")
            break;
        case 2:
            console.log("화요일")
            break;
        case 3:
            console.log("수요일")
            break;
        case 4:
            console.log("목요일")
            break;
        case 5:
            console.log("금요일")
            break;
        case 6:
            console.log("토요일")
            break;
    }

    const day = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ]

    const now = new Date(2025,11,25)
    console.log(now.toLocaleDateString('ko-KR', { weekday : "long"}))
    console.log(day[now.getDay()])
}

{
    const date = new Date(2025, 10, 0)
    console.log(date.getDate())
}

{
    const startDate = new Date(2025, 0, 1) // 
    const endDate = new Date(2026, 0, 0)
    const diffDate = endDate - startDate;
    const diffDays = diffDate / (1000 * 60 * 60 * 24);

    console.log(Math.ceil(diffDays) + '일')
}

{
    const bornDate = new Date(1990, 5, 15);
    const nowDate = new Date();

    const diffDate = (nowDate - bornDate) / (1000 * 60 * 60 * 24);
    console.log(Math.floor(Math.ceil(diffDate) / 365))
}

{
    const nowDate = new Date();
    nowDate.setDate(nowDate.getDate() + 10);

    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth() + 1;
    console.log(`${nowYear}. ${nowMonth}. ${nowDate.getDate()}`)
}

{
    // 2025, 10

    const date = new Date(2025, 10, 30);
    console.log(`${date.getFullYear()}, ${date.getMonth()}`)
}

{
    const date = new Date();
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)

    console.log(`${date.toLocaleString()}`)
}

{
    // 2024 - 10-01: 화요일
    // 2024 - 10-02: 수요일
    // ...
    // 2024 - 10 - 31: 목요일

    const date = new Date(2024,0,1);

    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    const weekNames = ["일", "월", "화", "수", "목", "금", "토"];

    for (let day = 1; day <= lastDay; day++) {
        const d = new Date(year, month, day);
        const weekName = weekNames[d.getDay()];
        console.log(`${year}-${String(month + 1).padStart(2 ,'0')}-${String(day).padStart(2, "0")}: ${weekName}요일`);
    }
}

{
    function checkYear (num) {
        if(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0))
            return '윤년'
        else
            return '평년'
    }

    console.log(checkYear(2024))
    console.log(checkYear(2023))
}