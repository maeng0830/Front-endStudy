//원시 값의 종류
const un = undefined; //undefined
const nu = null;      // null
const bool = false;   //boolean
const num = 0;        // num
const str = 'abc';    //문자열


//<원시 값의 불변성>
//문자열 메소드는 문자열을 변형할 수 없음.
str.toUpperCase();
console.log(str);

//할당은 원시 값에 새로운 값을 부여
//str 복제본을 통해 toUpperCase가 실행된 것이며, 새로운 원시 값이 생성된 것이라 이해할 수 있음.
const str2 = str.toUpperCase();
console.log(str2);


//객체란 원시 값이 아닌 자료형을 말한다.
//객체
const obj = {
    name: 'kmk',
}

//배열
const arr = [ 'kmk' ];

//함수
function func() {
    return 'kmk';
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);





