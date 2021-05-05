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
// Implicit way of type casting
var person = {
    name: 'Tanzim Rizwan',
    age: 28,
    hobbies: ['Reading', 'Cooking']
};
console.log(person.name);
var favoriteActivities;
favoriteActivities = ['Cooking'];
var roles; // Tuples 
roles = [1, 'admin'];
roles.push(5); // Exception
