let sum = 0;

for (let i = 0; i < 5; i++) {
    sum += i;
}

console.log(sum);

/////////////////////////////////////////////////////////////
let sum2 = 0;
let i2 = 0;

while(i2 < 5) {
    sum2 += i2;
    i2++;
}

console.log(sum2);


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
let num = 0;
let answer;

if(num > 10) {
    answer = '10보다 큽니다.'
} else if(num > 5) {
    answer = '5보다 큽니다'
} else if(num > 0) {
    answer = '0보다 큽니다'
} else {
    answer = '0 또는 음수 입니다'
}

console.log(answer);