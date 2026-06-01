// // console.log(greeting); // undefined
// // var greeting = "Hello World";
// // console.log(greeting); 



// // console.log(batting);
// // let batting = "Virat Kohli";
// // console.log(batting);



// // function getUserstatus() {
// //     console.log(status);
// //     var status = "Active";
// //     console.log(status);
// // }
// // getUserstatus();


// console.log(score);
// var score = 100;   //var stmt can be executed before declaration and initialization, it will be undefined until the line where it is initialized. So, it will print undefined first and then 100 when we log it again after initialization.


// console.log(score);
// let score = 200; //let stmt cannot be executed before declaration and initialization, it will throw a ReferenceError if we try to access it before initialization. So, it will throw an error when we try to log it before initialization.

let x = "global"
if (true) {
    let x = "local";
    console.log(x); // local
}
console.log(x); // global