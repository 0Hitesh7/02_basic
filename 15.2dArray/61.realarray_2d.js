let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];


// how many test cases have we executed?? ==3
// how mahy test cases are passed?? == 2
// what is the status code that you have got for the fail? ==404

for (let i = 0; i < testMatrix.length; i++) {
    console.log(testMatrix[i].join(" "));
}

