let str = " Hello, World! ";

console.log(str.toUpperCase()); // " HELLO, WORLD! "
console.log(str.toLowerCase()); // " hello, world! "

console.log(str.trim()); // "Hello, World!"
console.log(str.trimStart()); // "Hello, World! "
console.log(str.trimEnd()); // " Hello, World!"

str.trimStart();
str.trimEnd();
str.trim();

let msg = "Test: fail, Retry:fail";
console.log(msg.replace("fail", "pass")); // "Test: pass, Retry:fail"
console.log(msg.replaceAll("fail", "pass")); // "Test: pass, Retry:pass"

//concatenation
"hello" + "" + "world"; // "helloworld"
"hello".concat(" ", "world"); // "hello world"

let url = "https://www.example.com/search?q=javascript";
console.log(url.replace("javascript", "python")); // "https://www.example.com/search?q=python"

let r = "pass, fail, skip".split(", ");
console.log(r); // ["pass", "fail", "skip"]

let rr = "test login pass".split(" ").join("-");
console.log(rr); // "test-login-pass"

let parts = ["2024", "06", "30"];
let date = parts.join("-");
console.log(date); // "2024-06-30"