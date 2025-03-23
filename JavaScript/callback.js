function add(x,y) {
    return x+y;
    
}
console.log(add(2,3))

// call back 

function callBackFunction(){
    console.log("callback function called");
}
callBackFunction();

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Pratish", sayBye);

const nestedArray = (arr, act) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = act(arr[i]); // Apply the function to each element
    }
    return arr; // Return the modified array after the loop
};

const array = [1, 2, 5, 7];
console.log(nestedArray(array, (a) => a * 2)); // Output: [2, 4, 10, 14]

// const add1 = (x,y)=>{
//     return x+y;
// }
// const addNumber1 = add1(10,20);
// console.log(addNumber1);

function fetchData(c) {
    console.log("api is fetching...");
    setTimeout(()=>{
        c("api succesfuly fetched");
    }, 2000);
}
fetchData((m)=>{console.log(m);
});




