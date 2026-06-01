//function
function greet() {
    console.log("This is a function code")
}
greet(); //calls the function

let a = greet; //assigns function to variable
console.log(a); //prints function definition


//function with parameters
function greetByName(name) {
    console.log("Hello " + name);
}
greetByName("Alice");
let result = greetByName("Bob"); //function without return returns undefined
console.log(result); //undefined

//type for function
function sumOfTwoNumbers(a, b) {
    return a + b;
}
console.log(sumOfTwoNumbers(3, 4)); //7

//function expression
const greet2 = function (name) {
    return `Hello, ${name}!`;
}
console.log(greet2("Charlie")); //Hello, Charlie!
