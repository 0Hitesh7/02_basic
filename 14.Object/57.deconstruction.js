const user = { name1: "John", age: "30", city: "Delhi" };

//Basic Destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);


//rename variable
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);


//Default values
const { country = "India" } = user;
console.log(country);
console.log();

const data = {
    user: {
        name: "Visual",
        address: {
            city: "Delhi"
        }
    }
}
const { user: { address: { city } } } = data;
console.log(data.user.address.city);
