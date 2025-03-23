let number = [1,2,3,4,5,6,7,8,9,10];
let oddNumber = [];
let evenNumber = [];

for(let i=0;i<number.length;i++){
    if(number[i]%2==0){
        evenNumber.push(number[i]);
    }else{
        oddNumber.push(number[i]);
    }
}
console.log("this is odd number", oddNumber);
console.log("this is even numeber", evenNumber);

let a = "binod";
let b = 1;
let fullMoon = true;
let c = 2.5;
let student = {
    name: "Ramesh",
    place: "Pokhara",
    age: 18
}
let student2 = ["ram","shyam","hari"]
console.log("type of fullmonn:", typeof fullMoon)
console.log("type of student", typeof student)
console.log(typeof student2);
let student3 =[{
    name: "Ramesh",
    place: "Pokhara",
    age: 18
},
{
    name: "ram",
    place: "Pokhara",
    age: 18
},
{
    name: "John",
    place: "Pokhara",
    age: 18
}]