//local storage set and get item

let user = {
    name: 'John',
    age: 30,
    occupation: "Software Enginner",
    email: 'john@example.com'
}

// localStorage.setItem("name", "John");
// localStorage.setItem("token", response.token);
localStorage.setItem("token1", "eferer123456ppp");
localStorage.setItem("user", JSON.stringify(user)); //convert user object to string

console.log("name of user", user.name);
let stringUser = JSON.stringify(user);
console.log("This is stringify",stringUser);

// localStorage.setItem("user", stringUser);
let strUser = {
    "name": 'John',
    "age": 30,
    "occupation": "Software Enginner",
    "email": 'john@example.com'
};
console.log(strUser.name);

let token1 = localStorage.getItem("token1");
let user1 = localStorage.getItem("user");
// let user2 = JSON.parse(user1);
console.log(token1);
console.log(user1.name)
let objectUser = JSON.parse(user1);
console.log(objectUser.name);

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)



