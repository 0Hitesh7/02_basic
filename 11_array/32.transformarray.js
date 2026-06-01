//map - transform array
let score = [85, 92, 78];
let grade = score.map(s => s > 70 ? "Pass" : "Fail");
console.log(grade);

//filter - keeps element that pass a test 
let passing = score.filter(s => s > 70);
console.log(passing);

//reduce - reduces array to single value
let total = score.reduce((sum, s) => sum + s, 0);
console.log(total);

//flat - flattens nested array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.flat();
console.log(flat);