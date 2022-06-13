const str = 'a';
const num = 0;
const boolean = true

//JS의 배열은 다양한 타입의 데이터를 저장할 수 있다.
const arr = [str, num, boolean, 'data'];

//배열의 길이
console.log(arr.length);

//배열의 특정 요소 반환
console.log(arr[0]);

//배열은 원시 값이 아니기 때문에 불변하지 않는다.
//따라서 배열에 대한 수정이 가능하다.
console.log(typeof arr);

//요소 추가
arr[4] = 'add';
console.log(arr);

//요소 변경
arr[0] = '첫 번째';
console.log(arr);

//배열 메소드
arr.push('마지막 추가');
arr.unshift('첫 번째 또 추가')
console.log(arr)