// keyword -> function
// name -> hello
// parameter -> ()
// body -> { }

function hell(parameter) {
    body
}

/////////////////////////////////////////////////////////////////////
let year = 2022;
let month = 6;
let date = 14;
let ymd = ''; 

function today(year, month, date) {
    ymd = '오늘은 ' + year + '년 ' + month + '월 ' + date + '일입니다.' 
}

today(year, month, date);

console.log(ymd);