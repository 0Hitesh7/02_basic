let arr = [1, 2, 3, 4, 5];
console.log(arr);

// //add element at the end of the array
// arr.push(6);
// console.log(arr);

// //add element at the beginning of the array
// arr.unshift(0);
// console.log(arr);

// //remove element from the end of the array
// arr.pop();
// console.log(arr);

// //remove element from the beginning of the array
// arr.shift();
// console.log(arr);

// splice method is used to add or remove elements from the array at a specific index
//add element at index 2
arr.splice(2, 0, 10);
console.log(arr);

arr.splice(2, 1, 99);
console.log(arr);
