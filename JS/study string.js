const word1 = '문자1';
const word2 = "문자2";
const word3 = `문자3
개행 처리가 된다.`;

// + 연산자를 통해 문자열 데이터 간의 합이 가능하다.
const words = word1 + ' ' + word2
console.log(words);

// ` `은 개행처리가 가능하다.
console.log(word3);

//문자열 변수[index]를 통해 문자열의 각 자리에 대한 문자를 반환할 수 있다.
console.log(word1[0]);

//문자열 변수.length를 통해 문자열의 길이를 반환할 수 있다.
console.log(word1.length);

