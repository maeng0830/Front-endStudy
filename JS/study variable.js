//<var>
//선언 및 재선언
var variable1;
var variable1;

//할당
variable1 = 1;

//재할당
variable1 = 2;

/////////////////////////////////////////////////////////////////////

//<let>
//선언(재선언 불가능)
let variable2;

//할당 
variable2 = 1;

//재할당
variable2 = 2;

/////////////////////////////////////////////////////////////////////

//<const>
//선언(재선언 불가능), 반드시 선언과 초기화(초기값 할당)를 동시 진행 
const variable3 = 1;

//재할당 불가능(값 변경 안됨)
variable3 = 2;

console.log(variable1, variable2, variable3);
