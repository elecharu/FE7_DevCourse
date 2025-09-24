function solution(video_len, pos, op_start, op_end, commands) {

    let pos_time = convertSec(pos)
    const op_start_time = convertSec(op_start);
    const op_end_time = convertSec(op_end)
    const video_time = convertSec(video_len);

    // 시작 위치가 오프닝 구간이면 무조건 오프닝 끝으로 점프
    if (pos_time >= op_start_time && pos_time <= op_end_time) {
        pos_time = op_end_time;
    }

    // commands 적용
    for (const func of commands) {
        func === 'next' ? pos_time += 10 : pos_time -= 10;
    }

    // 영상 범위 보정
    if (pos_time < 0) pos_time = 0;
    if (pos_time > video_time) pos_time = video_time;

    // 오프닝 구간에 걸리면 끝으로 점프
    if (pos_time >= op_start_time && pos_time <= op_end_time) {
        pos_time = op_end_time;
    }

    return toStr(pos_time);
}

function convertSec(time) {
    const [mm, ss] = time.split(':').map(v => Number(v))
    return mm * 60 + ss
}

function toStr(time) {
    const mm = Math.floor(time / 60);
    const ss = time % 60;

    return String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0');
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]))
console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))
console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"]))