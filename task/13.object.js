const user = {
    name: "Visual studio",
    age: "10",
    email: "visual@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);


//Dyanamic Property access
const key = "age";
console.log(user[key]);

//adding/modifying
user.city = "Delhi";
console.log(user);
