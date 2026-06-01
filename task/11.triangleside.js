let a = 10;
let b = 10;
let c = 15;
do {
    if (a === b && b === c && a === c) {
        console.log("Equilateral triangle");
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
} while (false); // This will only run once

