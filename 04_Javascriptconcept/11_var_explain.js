var a = 10;

console.log(a);

function printhello() {
    console.log("hello");
    var a = 20; //local variable
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}

printhello();


//variable can be change every time and give different value
