// //checking array
// let arr = [1, 2, 3];
// console.log(Array.isArray(arr)); //true
// console.log(typeof arr); //object 

// // every & some
[80, 90, 75].every(s => s > 70); //true
[80, 90, 65].every(s => s > 70); //false
[80, 90, 65].some(s => s > 70); //true
[60, 65, 55].some(s => s > 70); //false


// //playwright API code
[200, 201, 203].every(status => status >= 200 && status < 300); //true
[200, 201, 404].every(status => status >= 200 && status < 300); //false
[200, 201, 404].some(status => status >= 200 && status < 300); //true
[400, 401, 404].some(status => status >= 200 && status < 300); //false

//some - at least one must pass test
[80, 90, 75].some(s => s > 70); //true
[60, 65, 55].some(s => s > 70); //false