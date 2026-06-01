// Iterate an array using a for loop
let tests = ["Login", "Signup", "Logout"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);

}
console.log();

//for...of --iterates over values
for (let test of tests) {
    console.log(test);
}
console.log();

//foreach --iterates over values with callback function
tests.forEach((i, index) => {
    console.log(i, index);
});
console.log();