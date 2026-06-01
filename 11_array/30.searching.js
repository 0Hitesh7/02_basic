let results = ["pass", "fail", "skip", "pass", "fail"];
results.indexOf("fail"); //1
results.indexOf("skip"); //-1

// //indexOf --returns first index, or -1 if not found
// results.lastIndexOf("fail"); //4
// results.lastIndexOf("skip"); //-1

// //lastIndexOf --searches from the end
// results.lastIndexOf("fail"); //4
// results.lastIndexOf("skip"); //-1
// //includes --returns boolean value
// results.includes("pass"); //true
// results.includes("skip"); //false

// //find --returns first match element
// let numbers = [1, 2, 3, 4, 5];
// numbers.find(num => num > 3); //4

// //findIndex
// numbers.findIndex(num => num > 3); //3

// numbers.findLast(num => num > 3); //5
// numbers.findLastIndex(num => num > 3); //4