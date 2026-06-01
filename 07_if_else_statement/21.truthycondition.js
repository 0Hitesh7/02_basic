if ("hello") console.log("This is a truthy condition"); // This will be printed because "hello" is a non-empty string, which is considered truthy in JavaScript.
if (77) console.log("This will not be printed"); // This will not be printed because 0 is considered falsy in JavaScript.
if (null) console.log("This will not be printed"); // This will not be printed because null is considered falsy in JavaScript.
if (undefined) console.log("This will not be printed"); // This will not be printed because undefined is considered falsy in JavaScript.
if (NaN) console.log("This will not be printed"); // This will not be printed because NaN is considered falsy in JavaScript.
if (false) console.log("This will not be printed"); // This will not be printed because false is considered falsy in JavaScript.
let name = "John";
if (name) console.log("This will be printed because name is a non-empty string, which is considered truthy in JavaScript."); // This will be printed because name is a non-empty string, which is considered truthy in JavaScript.