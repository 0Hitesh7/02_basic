//maximum between two numbers using nested condition
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Both numbers are equal");
}


//maximum between three numbers using nested condition
let a = 10;
let b = 20;
let c = 30;

if (a > b) {
    if (a > c) {
        console.log(a + " is the greatest number");
    } else {
        console.log(c + " is the greatest number");
    }
} else {
    if (b > c) {
        console.log(b + " is the greatest number");
    } else {
        console.log(c + " is the greatest number");
    }
}