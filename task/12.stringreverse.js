// string reverse

function reverseString(str) {
    return str.split('').reverse().join('');
}

let name = 'string';
let greeting = `Hello, ${name}!`;

console.log(greeting);
console.log(reverseString(greeting));
