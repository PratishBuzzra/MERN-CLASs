let number = [1,2,3,4,5,6,7,8,9];

//filter method
let filterNumber = number.filter((num)=>{
    return num>2;
})
console.log(filterNumber);

// find method in Array
let findNumber = number.find((num)=>{
    return num>2;
})
console.log(findNumber);

//spread operator
let a = [1,2,3,4];
let b = [...a,10];
console.log(b);

let student1 = ["Ram","shyam","hari","sita","gita"];
let student2 = [...student1,"venom"];
console.log(student2);

//push and pop
let fruits = ["apple","banna","cherry","banan"];
let fruitLenght = fruits.length;
console.log(fruitLenght);

let fruits1 = fruits.push("mango");
console.log("push:",fruits)

// pop method 
let popp = fruits.pop();
console.log("pop:",fruits);

//shift method
let shifts = fruits.shift();
console.log("shift:",fruits);

// unshift 
let unshifts = fruits.unshift("orange");
console.log("unshift:",fruits);

//  slice 
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
let color = ["red","green","blue","pink","yellow"];
let slice1 = color.slice(0,3);
console.log("slice:",slice1);
let slice2 = color.slice(1,3);
console.log("slice:",slice2);

//splice
let color2 = ["red","green","blue","pink","yellow"];
color2.splice(2,0,"cyan","violet")
console.log("splice:",color2);
color2.splice(2,2)
console.log("splice:",color2)

// // indexof 
let color3 = ["red","green","blue","pink"]
console.log(color3.indexOf("green"))
console.log(color3.indexOf("black"))

// findindexof
let ages = [5,6,7,8,9,18,50,25];
let largeThan18 = ages.findIndex((e)=>{
    return e>18;
})
console.log(largeThan18)

//split and join
let text = "this is a good boy";
let text1 = text.split(" ");
console.log(text1);
console.log(text1.join("-"));

//string
const str = "hello World";
const upperCase = str.toUpperCase();
console.log(upperCase);
const lowerCase = str.toLowerCase();
console.log(lowerCase);

const str2 = "  yo hello world";
let trims = str2.trim();
console.log(trims);

let cooolor = ["red","green","blue","yellow","pink"];

let cooolor1 = cooolor.includes(("blue  ").trim());
console.log(cooolor1);


