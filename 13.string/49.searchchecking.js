//searching and checking

let url = "https://www.example.com/search?q=javascript";

//includes
console.log(url.includes("search")); // true
console.log(url.includes("javascript")); // true
console.log(url.includes("python")); // false
console.log();

//startsWith
console.log(url.startsWith("https://")); // true
console.log(url.startsWith("http://")); // false
console.log();

//endsWith
console.log(url.endsWith(".com")); // true
console.log(url.endsWith(".org")); // false
console.log();

//indexOf
console.log(url.indexOf("search")); // 23
console.log(url.indexOf("javascript")); // 31
console.log(url.indexOf("python")); // -1

console.log(url.lastIndexOf("a")); // 30
console.log(url.indexOf("b")); // -1