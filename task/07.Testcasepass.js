// //verify testcasepass or fail based on the status code
// let expected = "login successfully";
// let actual = "login successfully";
// if (expected === actual) {
//     console.log("Testcase passed");
// } else {
//     console.log("Testcase failed");
// }



let expected = "login successfully";
let actual = "invalid credentials";
if (expected === actual) {
    console.log("Testcase passed");
} else {
    console.log("Testcase failed due to invalid credentials or wrong username or password");
}