// object

let obj = {}; //empty object
let obj1 = {
    name: "Object",
    Topic: 14,
}
console.log(obj1.name); // Object

let test_obj = { Name: "Object1", Topic: "14.1" };
console.log(test_obj.Name); // Object1

let student1 = { name: "John", age: 20, };
let student2 = { name: "Jane" };
let student3 = { name: "Doe", age: 22, Mobile: "9876543210" };

let a = { status: "active" };
console.log(a.status); // active
console.log(a["status"]); // active

//copy by reference
let b = a;
b.status = "inactive";
console.log(a.status); // inactive

