{
    function isWeekend(str) {
        const date = str.split('-')
        const year = date[0];
        const month = date[1];
        const day = date[2];

        const newDate = new Date(year, month - 1, day);

        if (newDate.getDay() === 0 || newDate.getDay() === 6) {
            return '주말';
        } else {
            return '평일';
        }
    }
    console.log(isWeekend('2024-10-26')); // 주말
    console.log(isWeekend('2024-10-29')); // 평일
    console.log(isWeekend('2024-10-27')); // 주말
}

{

    function weeksBetween(dt1, dt2) {
        const date1 = new Date(dt1);
        const date2 = new Date(dt2);

        const diffDays = (date2 - date1) / (1000 * 60 * 60 * 24);
        return `${Math.floor(diffDays / 7)}주`;
    }
    console.log(weeksBetween('2024-01-01', '2024-02-01')); // 4주
    console.log(weeksBetween('2024-01-01', '2024-04-01')); // 13주
    console.log(weeksBetween('2024-06-01', '2024-08-01')); // 8주
}

{
    function daysUntilNextBirthday(dt) {
        const now = new Date();

        const [, month, day] = dt.split('-').map(Number);

        let nextBirthday = new Date(now.getFullYear(), month - 1, day);
    
        if (nextBirthday < now) {
            nextBirthday = new Date(now.getFullYear() + 1, month - 1, day);
        }
    
        const diffTime = nextBirthday - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) % 365;
    
        return diffDays;
    }
    console.log(daysUntilNextBirthday('1990-05-15')); // 263
    console.log(daysUntilNextBirthday('2000-12-31')); // 128
    console.log(daysUntilNextBirthday('1985-08-25')); // 0

}