// let scores = [
//     [10, 20, 30],
//     [20, 40, 60],
//     [30, 60, 90]
// ];
// let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
// console.log(rowSums);


// //filter -- keeps elements that pass a test
// let passing = scores.flat().filter(s => s > 70);
// console.log(passing);

// // //reduce, //reduce - accumulates to a single value
// let total = scores.flat().reduce((a, b) => a + b, 0);
// console.log(total);


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

let test = suiteResults.flat().filter(test => test.includes("fail")).join("\n");
console.log(test);

