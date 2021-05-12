function add(n1:number, n2:number, showResult: boolean, phrase:string) {
  let result:number; 
  result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
    return "console log";
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

type Combinable = number | string; // Type Alias

function combine(
  input1: Combinable,
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


// Function Type
// let newAdd: (a:number, b:number, c:boolean, d:string) => number;

// newAdd = add;
// console.log(newAdd(2, 5, true, "Result is: "));

// Function Type in Callback
function addAndHandle(num1: number, num2: number, cb: (num:number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(5,7, (result) => {
  console.log(result)
});

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'UserName';

// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}
