var globalVar = '전역 변수';

//let으로 선언된 변수는 블록 내부에서만 접근 가능하다.
//for (let index = 0; index < 3; index++) {}
for (var index = 0; index < 3; index++) {}

function outerFunc() {
    console.log(globalVar); // 전역 변수

    function innerFunc() {
        var innerVar = '내부 함수 변수';
        console.log(index);
    }

    innerFunc();
}

outerFunc();