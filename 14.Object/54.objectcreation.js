let c = { name: "Object3", Topic: "14.3" };
let d = { name: "Object3", Topic: "14.3" };

console.log(c); // { name: "Object3", Topic: "14.3" }
console.log(d); // { name: "Object3", Topic: "14.3" }

//both having difference reference
console.log(c === d); // false

console.log(d == c); // false