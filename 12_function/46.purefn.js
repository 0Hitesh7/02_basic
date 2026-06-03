//pure function
function calculatePassRate(passed, total) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculatePassRate(45, 50));


//impure function
function isPassing(score) {
    return score >= threshold;
}
let threshold = 60;
console.log(isPassing(threshold)); //true
threshold = 70;
console.log(isPassing(threshold)); //true