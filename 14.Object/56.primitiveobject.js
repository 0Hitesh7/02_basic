// primitive vs reference types

let a = 10;
let b = a; // copy by value
b = 20;
console.log(a); // 10
console.log(b); // 20
console.log();

//object

let obj1 = { value: 10 };
let obj2 = obj1;
obj2 = { value: 20 };
console.log(obj1.value);
console.log(obj2.value);

const t_json = {
    "name": "exampleJSON",
    "type": "JSON"
}
console.log(t_json);
console.log();

const t_js = {
    name: "OBJECT",
    type: "OBS"
}
console.log(t_js);
console.log();
