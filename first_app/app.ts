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
