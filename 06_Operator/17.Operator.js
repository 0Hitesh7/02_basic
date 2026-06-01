// // // assignment Operators
// // let a = 10;
// // a = a + 5; // a = a + 5
// // console.log(a); // 15


// // // arithmetic Operators
// // let x = 10;
// // let y = 5;

// // console.log(x + y); // 15
// // console.log(x - y); // 5
// // console.log(x * y); // 50
// // console.log(x / y); // 2
// // console.log(x % y); // 0

// // exponentiation operator

// // let x = 2;
// // let y = 3;
// // console.log(x ** y); // 8

// // compound operator
// let x = 10; //"10" is a string and 10 is a number, so it will be converted to a number before the addition operation.
// x += 5; // x = x + 5
// console.log(x); // 105
// console.log()
// x -= 3; // x = x - 3
// console.log(x); // 102
// console.log()

// x *= 2; // x = x * 2
// console.log(x); // 204
// console.log()

// x /= 4; // x = x / 4
// console.log(x); // 51
// console.log()

// x %= 7; // x = x % 7
// console.log(x); // 2
// console.log()

// x **= 3;
// console.log(x); // 8
// // console.log()

// //comparison operators
// let a = 10;
// let b = 5;

// console.log(a == b); // equality operator, it checks for value equality and returns true if the values are equal, otherwise it returns false. In this case, it will return false because a has a value of 10 and b has a value of 5.
// console.log(a === b); // identity operator, it checks for both value and type equality and returns true if both the value and type are the same, otherwise it returns false. In this case, it will return false because a has a value of 10 and b has a value of 5.
// console.log(a != b); // Inequality operator, it checks for value inequality and returns true if the values are not equal, otherwise it returns false. In this case, it will return true because a has a value of 10 and b has a value of 5.
// console.log(a > b); // Relational operator, it checks if the value of a is greater than the value of b and returns true if it is, otherwise it returns false. In this case, it will return true because a has a value of 10 and b has a value of 5.
// console.log(a < b); // Relational operator, it checks if the value of a is less than the value of b and returns true if it is, otherwise it returns false. In this case, it will return false because a has a value of 10 and b has a value of 5.
// console.log(a >= b); // Relational operator, it checks if the value of a is greater than or equal to the value of b and returns true if it is, otherwise it returns false. In this case, it will return true because a has a value of 10 and b has a value of 5.
// console.log(a <= b); // Relational operator, it checks if the value of a is less than or equal to the value of b and returns true if it is, otherwise it returns false. In this case, it will return true because a has a value of 10 and b has a value of 5.
// console.log();


// //== and === are both comparison operators in JavaScript, but they have different behaviors when it comes to type coercion. The == operator performs type coercion, meaning it will convert the operands to a common type before making the comparison. On the other hand, the === operator does not perform type coercion and checks for both value and type equality. Therefore, it is generally recommended to use === for comparisons to avoid unexpected results due to type coercion.
// console.log(10 == "10"); // true, because the == operator performs type coercion and converts the string "10" to the number 10 before making the comparison.
// console.log(10 === "10"); // false, because the === operator does not perform type coercion and checks for both value and type equality. In this case, the number 10 is not equal to the string "10" in terms of type, so it returns false.
// console.log(0 == false); // true, because the == operator performs type coercion and converts the boolean false to the number 0 before making the comparison.
// console.log(0 === false); // false, because the === operator does not perform type coercion and checks for both value and type equality. In this case, the number 0 is not equal to the boolean false in terms of type, so it returns false.    
// console.log(null == undefined); // true, because the == operator performs type coercion and considers null and undefined to be equal when using the == operator.
// console.log(null === undefined); // false, because the === operator does not perform type coercion and checks for both value and type equality. In this case, null and undefined are not equal in terms of type, so it returns false.
// console.log(1 == "null")
// console.log(1 === "null")
// console.log(true == "")
// console.log(true === "")


// increment and decrement operators
// let c = 10;
// console.log(c++); // 10, because the post-increment operator returns the value before incrementing it.
// console.log(c); // 11, because the value of c has been incremented by 1 after the previous line.

// let d = 5;
// console.log(++d); // 6, because the pre-increment operator increments the value before returning it.
// console.log(d); // 6, because the value of d has been incremented by 1 in the previous line. 

// let e = 10;
// console.log(e--); // 10, because the post-decrement operator returns the value before decrementing it.
// console.log(e); // 9, because the value of e has been decremented by 1 after the previous line.

// let f = 5;
// console.log(--f); // 4, because the pre-decrement operator decrements the value before returning it.
// console.log(f); // 4, because the value of f has been decremented by 1 in the previous line.

// logical operators
// let p = true;
// let q = false;

// console.log(p && q); // false, because the logical AND operator returns true only if both operands are true. In this case, since q is false, the result is false.
// console.log(p || q); // true, because the logical OR operator returns true if at least one of the operands is true. In this case, since p is true, the result is true.
// console.log(!p); // false, because the logical NOT operator returns the opposite of the operand's value. Since p is true, !p is false.
// console.log(!q); // true, because the logical NOT operator returns the opposite of the operand's value. Since q is false, !q is true.

// ternary operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No"; // The condition age >= 18 is evaluated. If it is true, the expression returns "Yes". If it is false, it returns "No".
console.log(isAdult); // Yes, because the condition age >= 18 is true since age is equal to 18.

// Nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"; // The condition score >= 90 is evaluated first. If it is true, the expression returns "A". If it is false, it evaluates the next condition score >= 80. If that is true, it returns "B". If that is false, it evaluates the next condition score >= 70. If that is true, it returns "C". If that is false, it evaluates the next condition score >= 60. If that is true, it returns "D". If all conditions are false, it returns "F".
console.log(grade); // B, because the condition score >= 80 is true since score is equal to 85. 


// nullish operator
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue; // The nullish coalescing operator (??) returns the right-hand operand (defaultValue) when the left-hand operand (userInput) is null or undefined. Otherwise, it returns the left-hand operand.
console.log(result); // Default Value, because userInput is null, so the operator returns defaultValue. 