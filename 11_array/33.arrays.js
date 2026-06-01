let fruits = ["Banana", "cherry", "Apple"];
fruits.sort(); //sorts in place
console.log(fruits);

let numbers = [3, 1, 4, 1, 5];
numbers.sort()
console.log(numbers); //sorts as strings

let nums = [10, 1, 21, 2];
nums.sort()
console.log(nums); //sorts as strings

//ascending order
nums.sort((a, b) => a - b);
console.log(nums);

//descending order
nums.sort((a, b) => b - a);
console.log(nums);

