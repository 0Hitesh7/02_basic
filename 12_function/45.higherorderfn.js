//higher order function

function runWithLoggin(testFn, testName) {
    console.log(`Running ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} ${result}`);
    return result;
}
function loginTest() {
    return "Passed";
}
function registrationTest() {
    return "Failed";
}
runWithLoggin(loginTest, "Login Test");
runWithLoggin(registrationTest, "Registration Test");