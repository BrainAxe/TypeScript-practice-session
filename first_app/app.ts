function add(n1:number, n2:number, showResult: boolean, phrase:string) {
  let result:number; 
  result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5 // 5.0;
const number2 = 2.8;
let printResult = true;
let resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);

// Explicit way of type casting
// let person: { name: string; age: number; hobbies: string[] } = {
//   name: 'Tanzim Rizwan',
//   age: 28,
//   hobbies: ['Reading', 'Cooking']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

// Implicit way of type casting
let person = {
  name: 'Tanzim Rizwan',
  age: 28,
  hobbies: ['Reading', 'Cooking'],
  role: Role.AUTHOR
};

console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ['Cooking'];

let roles: [number, string]; // Tuples 
roles = [1, 'admin'];
roles.push(5) // Exception

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

function combine(
  input1: number | string, // union
  input2: number | string, // union
  resultConversion: 'as-number' | 'as-text' // union literal
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 28, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '28', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Tanzim', 'Rizwan', 'as-text');
console.log(combinedNames);

