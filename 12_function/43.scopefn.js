//scope in function

let env = "production";

function setupConfig() {
    let timeout = 1000;
    console.log(env); //production
    console.log(timeout); //1000
}

setupConfig();
// console.log(timeout); //ReferenceError: timeout is not defined
console.log(env); //production
