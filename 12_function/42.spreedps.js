//rest of the param,
function logResult(suitName, ...rest) {
    console.log(suitName);
    console.log(rest);
}

logResult('heart', 'diamond', 'club', 'spade');
logResult('login Test', 1, 2, 3);
console.log();

function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500 && code < 600) return "server error";
    return "unknown status code";
}
console.log(getStatus(200)); // success
console.log(getStatus(404)); // client error
console.log(getStatus(500)); // server error
console.log(getStatus(123)); // unknown status code
console.log();

function logTest(name) {
    console.log('Running: ${name}');
}
let result = logTest("Login Test");
console.log(result); //undefined
console.log();


function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log(sum); //15
