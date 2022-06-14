//객체 선언
const person = {
    name: 'kmk',
    age: 30
}

//속성 값 조회
console.log(person.name);
console.log(person['name']);

//속성 및 값 추가
person.gender = 'male';
person.weight = 58;
console.log(person);
