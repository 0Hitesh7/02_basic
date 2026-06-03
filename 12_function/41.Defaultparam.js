function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms`);
}

retry("Login Test");
retry("Registration Test", 5, 2000);

function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
runTest("Login Test", "Passed", 150); // Login Test: Passed (150ms)
const r = runTest("Login Test", "Passed", 150);
console.log(r); // Login Test: Passed (150ms)
