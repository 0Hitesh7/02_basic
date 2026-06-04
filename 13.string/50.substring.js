let str = "Login Test Report";

console.log(str.slice(0, 5)); // Login
console.log(str.slice(11)); // Report
console.log(str.slice(-6)); // Report

let testNumber = str.slice(-3);
console.log(testNumber); // ort

console.log(str.includes("Test")); // true

str.substring(0, 5); // Login

console.log(str.substring(0, 5)); // Login
str.at(0); // L
