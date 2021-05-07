function add(n1, n2, showResult, phrase) {
    var result;
    result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
// Explicit way of type casting
// let person: { name: string; age: number; hobbies: string[] } = {
//   name: 'Tanzim Rizwan',
//   age: 28,
//   hobbies: ['Reading', 'Cooking']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// Implicit way of type casting
var person = {
    name: 'Tanzim Rizwan',
    age: 28,
    hobbies: ['Reading', 'Cooking'],
    role: Role.AUTHOR
};
console.log(person.name);
var favoriteActivities;
favoriteActivities = ['Cooking'];
var roles; // Tuples 
roles = [1, 'admin'];
roles.push(5); // Exception
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
function combine(input1, input2, // union
resultConversion // union literal
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 28, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '28', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Tanzim', 'Rizwan', 'as-text');
console.log(combinedNames);
// Function Type
var newAdd;
newAdd = add;
console.log(newAdd(2, 5, true, "Result is: "));
// Function Type in Callback
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(5, 7, function (result) {
    console.log(result);
});
var userInput;
var userName;
userInput = 5;
userInput = 'UserName';
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
