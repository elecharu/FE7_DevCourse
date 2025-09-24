// 1. 369 게임

function clapGame369(n){
    let result = ''
    for(let i = 1; i <= n; i++){
        if (/[369]/.test(i.toString())) {
            result += '👏 ';
        } else {
            result += i + ' ';
        }
    }
    return console.log(result)
}

clapGame369(5);
clapGame369(33);    

